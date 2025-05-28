import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import '../components/styles.css';
import Header from '../components/header';

const foodItems = [
  { id: 1, name: 'Yema', price: '$15.20', image: './Dessert/yema.png', category: 'Dessert' },
  { id: 2, name: 'Chicken Macaroni Salad', price: '$8.99', image: './Salads/chicken salad.png', category: 'Salads' },
  { id: 3, name: 'Tinolang Bangus', price: '$10.50', image: './Soups/bangus.jpg', category: 'Soups' },
  { id: 4, name: 'Bacond and Egg Salad', price: '$8.99', image: './Salads/bacon salad.png', category: 'Salads' },
  { id: 5, name: 'Caprese Skewers', price: '$8.99', image: './Appetizers/caprese.png', category: 'Appetizers' },
  { id: 6, name: 'Vegetable Samosas', price: '$8.99', image: './Appetizers/samosas.png', category: 'Appetizers' },
  { id: 7, name: 'Lentil Soup', price: '$11.99', image: './Soups/lentil.png', category: 'Soups' },
  { id: 8, name: 'Minestrone Soup', price: '$8.00', image: './Soups/minestrone.jpg', category: 'Soups' },
  { id: 9, name: 'Macaroni Salad', price: '$6.99', image: './Salads/macaroni.png', category: 'Salads' },
  { id: 10, name: 'Mango Sago', price: '$8.99', image: './Dessert/mango sago.png', category: 'Dessert' },
  { id: 11, name: 'Kalamay Gabi', price: '$20.00', image: './Dessert/kalamay.png', category: 'Dessert' },
  { id: 12, name: 'Spicy Chicken Wings', price: '$6.50', image: './Appetizers/chicken wings.png', category: 'Appetizers' }
];

const Foods = () => {
  const [filter, setFilter] = useState('All');

  const filteredItems = filter === 'All'
    ? foodItems
    : foodItems.filter(item => item.category === filter);

  const categories = ['All', 'Appetizers', 'Soups', 'Salads', 'Dessert'];

  return (
    <div>
      <Header />
      <Navbar />
      <section className="item-menu">
        <h2>Our Menu</h2>

        <div className="filter-buttons">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="item-grid">
          {filteredItems.map(item => (
            <div className="item-box" key={item.id}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Foods;
