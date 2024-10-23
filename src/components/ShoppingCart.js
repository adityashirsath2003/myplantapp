import { useSelector, useDispatch } from "react-redux";
import {removeItem } from "./cartSlice";

const ShoppingCart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Your Shopping Cart</h1>
      <div className="cart-items" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {cartItems.map(item => (
          <div key={item.id} className="cart-item" style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', display: 'flex', alignItems: 'center', backgroundColor: '#f9f9f9' }}>
            <img src={item.image} alt={item.name} style={{ width: '80px', height: 'auto', borderRadius: '5px', marginRight: '10px' }} />
            <div style={{ flex: 1 }}>
              <div>{item.name}</div>
              <div>${item.price}</div>
              <div>Quantity: {item.quantity}</div>
            </div>
            <div>
              <button onClick={() => handleRemove(item.id)} style={{ margin: '0 5px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px' }}>Total Price: ${totalPrice.toFixed(2)}</div>
      <button onClick={() => alert('Coming Soon')} style={{ margin: '5px', padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Checkout</button>
      <button onClick={() => window.location.href='/products'} style={{ margin: '5px', padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Continue Shopping</button>
    </div>
  );
};

export default ShoppingCart;
