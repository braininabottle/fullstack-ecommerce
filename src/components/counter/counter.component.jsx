import { useState, useContext } from "react"
import './counter.style.css'
import CartContext from '../../context/CartContext'

const Counter = ({ product }) => {
    const context = useContext(CartContext)
    const [qty, setQty] = useState(1)
    const { stock } = product;
   
    
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

    return(
        <div className='divButtonAddToCart'>
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
    )
}

export default Counter