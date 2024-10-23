import { useSelector } from "react-redux";
import { Link } from "react-router-dom"; 

const Header = () => {
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
   
    const headerStyle = {
        backgroundColor: '#4CAF50',
        padding: '10px 20px', 
        color: 'white',
        textAlign: 'center'
    };

    const navStyle = {
        display: 'flex',
        justifyContent: 'space-around', 
        listStyleType: 'none', 
        padding: 0, 
        margin: 0 
    };

    const linkStyle = {
        color: 'white', 
        textDecoration: 'none', 
        fontSize: '18px' 
    };

    const linkHoverStyle = {
        textDecoration: 'underline' 
    };

    return (
      <header style={headerStyle}>
        <nav>
          <ul style={navStyle}>
            <li><Link to="/products" style={linkStyle}>Products</Link></li>
            <li><Link to="/cart" style={linkStyle}>Cart ({totalQuantity})</Link></li> 
            <li><Link to="/landing" style={linkStyle}>Landing Page</Link></li> 
          </ul>
        </nav>
      </header>
    );
};
  
export default Header;
