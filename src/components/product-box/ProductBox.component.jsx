import '../product-box/Product-Box.styles.css'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'



const ProductBox = ({product}) => {

    const {title, imageUrl, qty, price,  _id} = product
    const context = useContext(CartContext)

    const formatter = new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
      
      });

    return(
        <div className='product-container'>
            <img src={imageUrl}/>
            <div className='customProductCartTitle'>
                <p>{title}</p>
            </div>
            <p className='customQtyBox fs-3'>{`${qty} * ${formatter.format(price)} = ${formatter.format(qty * price)}`}</p>
            <div className='cartDeleteButton d-flex'>
                <button
                onClick={()=>context.deleteProdcutFromCart(_id)} 
                className='btn btn-dark btn-lg align-content-center'
                >eliminar</button>
            </div>
        </div>
    )
}

export default ProductBox