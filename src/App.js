import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {LandingPage} from './components/LandingPage';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/landing" element={<LandingPage />} /> 
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </Router>
  );
}

export default App;
