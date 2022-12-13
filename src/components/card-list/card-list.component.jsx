import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = ({ products }) => (
  <div className='card-list'>
    {products.map((product) => {
      return <Card key={product._id} product={product} />;
    })}
  </div>
);

export default CardList;
