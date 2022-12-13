import './card.styles.css';
import { Link } from 'react-router-dom'
import Counter from '../counter/counter.component';



const Card = ({ product }) => {

  const { title, price, imageUrl, stock, _id } = product;

  const formatter = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
  
  });


  return (

    <div className='card-container'>
      <img
        alt={title}
        src={imageUrl}
      />
      <Link to={`/product/${_id}`}>
        <h3 className='card-title'>{title}</h3>
      </Link>

      <p className='card-price'>{formatter.format(price)} <span className='quantity-reference'>/Prec. Unit</span></p>
      <p className='card-stock'>Productos en stock : {stock}</p>
      <Counter product={product}/>
    </div>

  );
};

export default Card;
