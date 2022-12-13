import React from 'react'
import { useEffect, useState, useContext, Fragment } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import CartContext from '../../context/CartContext'
import './SingleProductView.styles.css'
import Spinner from '../spinner/Spinner.component'

const SingleProductView = () => {

    const [product, setProduct] = useState({})
    const { id } = useParams()
    const { title, price, imageUrl, stock, volume, brand, degrees, description } = product
    const context = useContext(CartContext)
    const [qty, setQty] = useState(1)
    const [loading, setLoading] = useState(true)

    const decrease = () => {
        if (qty >= 2) {
            setQty(qty - 1)
        }
    }

    const increase = () => {
        if (qty < stock) {
            setQty(qty + 1)
        }
    }

    const getProduct = async () => {
        const response = await axios.get(`https://backend-jp-production.up.railway.app/api/products/${id}`)
        const productInfo = response.data.product
        setProduct(productInfo)
    }

    useEffect(() => {
        getProduct()
        setLoading(false)
    }, [])

    const formatter = new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
      
      });


    return (
        <Fragment>
         {loading? <Spinner />: null}
            <div className='productContainer'>
                <div className='single-product-container'>
                <h1 className='fontStyle mb-3'>Descripción del producto</h1>
                    <div>
                        <img
                            alt={title}
                            src={imageUrl}
                        />
                        <h3 className='fontStyle card-title'>{title}</h3>
                        <p className='fontStyle card-description'><span className='card-price'>Descripción del producto:</span> {description}</p>
                        <p className='fontStyle card-price'>Marca del Producto: {brand}</p>
                        <p className='fontStyle card-price'>{formatter.format(price)} <span className=''>/Prec. Unit</span></p>
                        <p className='fontStyle card-price'>Productos en stock : {stock}</p>
                        <p className='fontStyle card-price'>Volumen: {volume}</p>
                        <p className='fontStyle card-price'>Grados de alcohol: {degrees}</p>
                    </div>
                    <div>
                        <button
                            className='qtyButton btn fs-5 btn-dark text-white'
                            onClick={decrease}
                            disabled={qty === 1}
                        >
                            -
                        </button>
                        <span
                            className='p-2 fs-5'
                        >
                            {qty}
                        </span>
                        <button
                            className='qtyButton fs-5 btn btn-dark text-white'
                            onClick={increase}
                            disabled={qty === stock}
                        >
                            +
                        </button>
                    </div>
                    <div className='mt-3'>
                        <button
                            className='btn btn-dark'
                            onClick={() => context.addToCart(product, qty)}
                        >
                            AGREGAR AL CARRITO
                        </button>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}

export default SingleProductView