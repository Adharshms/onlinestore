import React from 'react';
import './index.css';

const products = [
  {
    title: 'Handmade Gift Box',
    description: 'Beautiful eco-friendly gift box with natural items.',
    price: 299,
    image: 'https://source.unsplash.com/featured/?giftbox',
    phone: '918123456789',
  },
  {
    title: 'Wooden Mug',
    description: 'Rustic wooden mug for coffee lovers.',
    price: 499,
    image: 'https://source.unsplash.com/featured/?woodencup',
    phone: '918123456789',
  },
  {
    title: 'Eco Plant Pot',
    description: 'Mini indoor plant in biodegradable pot.',
    price: 199,
    image: 'https://source.unsplash.com/featured/?plant',
    phone: '918123456789',
  },
];

export default function App() {
  return (
    <div className="store">
      <header className="navbar">
        <h1 className="logo">InstaOrder</h1>
        <input className="search" type="text" placeholder="Search for products" />
      </header>

      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p className="price">₹{product.price}</p>
            <a
              href={`https://wa.me/${product.phone}?text=I want to order: ${product.title}`}
              className="whatsapp-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Order on WhatsApp
            </a>
          </div>
        ))}
      </div>

      <footer className="site-footer">
        <p>© 2025 InstaOrder. Built with ❤️ in Kerala</p>
      </footer>
    </div>
  );
}
