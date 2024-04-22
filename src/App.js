import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Products from './component/Products'
function App() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
const [allproduct, setallproduct]=useState(true)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json');
        setProducts(response.data.categories);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const renderProductsByCategory = (categoryName) => {
    return products
      .filter((category) => category.category_name === categoryName)
      .map((category) => (
        <div key={category.category_id}>
          <h2>{category.category_name}</h2>

          <div style={{display:'flex'}}>
         
            {category.category_products.map((product) => (
              <Products product={product} />
            ))}
          </div>
          
        </div>
      ));
  };

  return (
    <div className="App">
      <h1>Fashion Square</h1>
     
      <button onClick={() => setSelectedCategory('Men')}>Men</button>
      <button onClick={() => setSelectedCategory('Women')}>Women</button>
      <button onClick={() => setSelectedCategory('Kids')}>Kids</button>

      {selectedCategory === null ? (
        <div>
          {products.map((category) => (
            <div style={{ display: 'flex' }}>

              {category.category_products.map((product) => (
                <Products product={product} />
              ))}
            </div>
          ))}
        </div>
      ) : (
        renderProductsByCategory(selectedCategory)
      )}
    </div>
  );
}

export default App;
