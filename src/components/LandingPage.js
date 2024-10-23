import I1 from './Green.jpeg';

export function LandingPage() {
  return (
    <div 
      className="landing-page" 
      style={{
        backgroundImage: `url(${I1})`,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
        textAlign: 'center',
        padding: '20px',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <h1>My Plant Shop</h1>
      <p style={{
        maxWidth: '600px',
        lineHeight: '1.6',
        marginBottom: '20px',
        opacity: 0.9
      }}>
        Welcome to the best plant shop in town! At My Plant Shop, we believe that plants bring life to any space. Whether you are looking to beautify your home, enhance your office environment, or find the perfect gift for a loved one, we have a wide variety of plants to choose from.
        Our collection includes unique houseplants, succulent varieties, and beautiful flowering plants that are easy to care for. We source our plants from local growers who prioritize sustainability and quality.
        Join our community of plant lovers and discover tips on plant care, styling ideas, and more. Let us help you create your own green oasis!
      </p>
      <button 
        onClick={() => window.location.href='/products'} 
        style={{
          padding: '10px 20px',
          backgroundColor: 'blue',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Get Started
      </button>
    </div>
  );
}
