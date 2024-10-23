import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";
import I1 from './Aloe.jpeg';
import I2 from './Jasmine.jpeg';
import I3 from './Lily.jpeg';
import I4 from './Money.jpeg';
import I5 from './Rose.jpeg';
import I6 from './Marigold.jpeg';

const products = [
  { id: 1, name: 'Aloe Vera', price: 10, category: 'Succulents', image: I1 },
  { id: 2, name: 'Jasmine', price: 15, category: 'Succulents', image: I2 },
  { id: 3, name: 'Lily', price: 10, category: 'Succulents', image: I3 },
  { id: 4, name: 'Money Plant', price: 15, category: 'Succulents', image: I4 },
  { id: 5, name: 'Rose', price: 10, category: 'Succulents', image: I5 },
  { id: 6, name: 'Marigold', price: 15, category: 'Succulents', image: I6 },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Plants for Sale</h1>
      <div className="plant-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
        {products.map(product => (
          <div key={product.id} className="plant-item" style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', textAlign: 'center', backgroundColor: '#f9f9f9' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto', borderRadius: '5px' }} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button
              onClick={() => handleAddToCart(product)}
              disabled={cartItems.find(item => item.id === product.id)}
              style={{
                padding: '10px',
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
