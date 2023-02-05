import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/login/login.component';
import Home from './views/home/Home.view';
import Customer from './views/customer/customer.view';
import { useContext, useEffect, useState, Fragment } from 'react';
import UserContext from './context/Usercontext';
import Profile from './views/profile/Profile.view';
import Cart from './views/cart/Cart.view';
import Product from './views/product/Product.view';
import Modal from './components/modal/Modal';


function App() {

  const context = useContext(UserContext);
  const token = context.userState.token;
  const [loadingToken, setLoadingToken] = useState(true);
  const [showModal, setShowModal] = useState(true);

  const validateToken = async () => {
    const tokenLS = window.localStorage.getItem('token')
    if (tokenLS) {
      await context.validateToken(tokenLS)
    }
    setLoadingToken(false)
  };

  useEffect(() => {
    validateToken()
  }, []);

  if (loadingToken) {
    return null
  };

  return (
    <Fragment>
      {showModal && (<Modal setShowModal={setShowModal}/>)}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<Product />} />
        {token && <Route path='/profile' element={<Profile />} />}
        <Route path='/cart' element={<Cart />} />
        {!token && <Route path='/login' element={<Customer />} />}
        {!token && <Route path='/signup' element={<Login />} />}
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Fragment>
  )

}

export default App;




