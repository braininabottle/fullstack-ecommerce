import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Navigate} from 'react-router-dom'
import Login from './components/login/login.component'
import Home from './views/home/Home.view'
import Store from './views/store/store.view'
import Customer from './views/customer/customer.view'
import { useContext, useEffect, useState } from 'react'
import UserContext from './context/Usercontext';
import Profile from './views/profile/Profile.view'
import Cart from './views/cart/Cart.view'
import Product from './views/product/Product.view';

function App(){
  
  const context = useContext(UserContext)
  const token = context.userState.token
  const [loadingToken, setLoadingToken] = useState(true)

  const validateToken = async () => {
    const tokenLS = window.localStorage.getItem('token')
    if(tokenLS){
      await context.validateToken(tokenLS)
    }
    setLoadingToken(false)
  }

  useEffect(()=>{
    validateToken()
  },[])

  if(loadingToken){
    return null
  }

  return(
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<Product />} />
          {token && <Route path='/profile' element={<Profile/>} />}
          <Route path='/cart' element={<Cart />}  />
          {!token && <Route path='/login' element={<Customer/>} />}
          {!token && <Route path='/signup' element={<Login/>} />}
          <Route path='*' element={<Navigate to='/'/>} />
      </Routes>
  )

}

export default App;










// import { useState, useEffect } from 'react';
// import CardList from './components/card-list/card-list.component';
// import SearchBox from './components/search-box/search-box.component';
// import './App.css';

// const App = () => {
//   const [searchField, setSearchField] = useState('');
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilterProducts] = useState(products);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then((response) => response.json())
//       .then((products) => setProducts(products));
//   }, []);

//   useEffect(() => {
//     const newFilteredProducts = products.filter((product) => {
//       return product.title.toLocaleLowerCase().includes(searchField);
//     });

//     setFilterProducts(newFilteredProducts);
//   }, [products, searchField]);

//   const onSearchChange = (event) => {
//     const searchFieldString = event.target.value.toLocaleLowerCase();
//     setSearchField(searchFieldString);
//   };

//   return (
//     <div className='App'>
//       <h1 className='app-title'>Liquor Store</h1>

//       <SearchBox
//         className='search-box'
//         onChangeHandler={onSearchChange}
//         placeholder='search product'
//       />
//       <CardList products={filteredProducts} />
//     </div>
//   );
// };

// export default App;
