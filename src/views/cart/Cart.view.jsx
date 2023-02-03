import { Fragment } from 'react';
import ShoppingCart from '../../components/shopping-cart/shopping.cart.component';
import Navbar from '../../components/navbar/Navbar.component';


const Cart = () => {
    return(
    <Fragment>
        <Navbar/>
        <ShoppingCart />
    </Fragment>
    );
};

export default Cart;