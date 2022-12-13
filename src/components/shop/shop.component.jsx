import { useState, useEffect } from 'react';
import CardList from '../card-list/card-list.component';
import SearchBox from '../search-box/search-box.component';
import Spinner from '../spinner/Spinner.component'
import './shop.styles.css';

const Shop = () => {
  const [searchField, setSearchField] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilterProducts] = useState(products);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://backend-jp-production.up.railway.app/api/products')
      .then((response) => response.json())
      .then((response) => {
        setProducts(response.products)
        setLoading(false)
      });
  }, []);

  useEffect(() => {
    const newFilteredProducts = products.filter((product) => {
      return product.title.toLocaleLowerCase().includes(searchField);
    });

    setFilterProducts(newFilteredProducts);
  }, [products, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className='App'>
      <h1 className='app-title text-white'>Nuestros productos</h1>
      <SearchBox
        className='search-box'
        onChangeHandler={onSearchChange}
        placeholder='buscar producto'
      />
      <CardList products={filteredProducts} />
      {loading? <Spinner />: null}
    </div>
  );
};

export default Shop;
