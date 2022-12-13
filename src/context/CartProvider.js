import CartContext from "./CartContext";
import { useReducer } from 'react'
import CartReducer from "./CartReducers";

const CartProvider = ({children})=> {
    const [cartState, dispatch] = useReducer( CartReducer, {cart: [], qty:  0})

    const addToCart = (product, qty) => {
        dispatch({ type: 'ADD', payload: {product, qty}})
    }

    const deleteProdcutFromCart = (id) => {
        dispatch({ type: 'DELETE', payload: id})
    }

    const cleanCart = () => {
        dispatch({ type: 'CLEAN'})
    }

    return(
        <CartContext.Provider value={{ cartState, addToCart, deleteProdcutFromCart, cleanCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider