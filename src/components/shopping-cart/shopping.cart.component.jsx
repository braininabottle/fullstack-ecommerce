import React from 'react'
import { useContext, Fragment } from 'react'
import CartContext from '../../context/CartContext'
import ProductBox from '../product-box/ProductBox.component'
import '../shopping-cart/shopping.cart.styles.css'
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const ShoppingCart = () => {
    const context = useContext(CartContext)
    const { qty, cart } = context.cartState
    const navigate = useNavigate()

    const productReducer = async () => {
        console.log('estoy en el try catch')
        try {
            const response = await axios.put('https://backend-jp-production.up.railway.app/api/products/reducedstock', { cart })
            console.log(response)
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <Fragment>
            <div className='cart-container mx-5 fs-2'>
                <h1 className='cart-title mt-3 mb-3 text-white'>
                    Productos en tu carrito de compras <span className='text-white'>({qty})</span></h1>
                <div>
                    {cart.map(el => <ProductBox product={el} key={el._id} />)}
                </div>
                <div >
                    {cart.length ? (
                        <PayPalButtons
                            createOrder={(data, actions) => {
                                return actions.order.create({
                                    purchase_units: [
                                        {
                                            amount: {
                                                value: "1.99",
                                            },
                                        },
                                    ],
                                });
                            }}
                            onApprove={(data, actions) => {
                                return actions.order.capture().then((details) => {
                                    const name = details.payer.name.given_name;
                                    alert(`Transaction completed by ${name}`);
                                    context.cleanCart()
                                    productReducer()
                                    navigate('/')
                                });
                            }}
                        />
                    ) : null}
                </div>
            </div>
        </Fragment>
    )
}

export default ShoppingCart
