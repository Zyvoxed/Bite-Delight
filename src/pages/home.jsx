  import React, { useState } from 'react';
  import { Link } from 'react-router-dom';
  import '../components/styles.css';
  import Footer from '../components/footer';
  import Navbar from '../components/navbar';

  const Home = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(prev => !prev);
    };

    return (
      <div>
        <Navbar/>
        <div className="home-image"></div>
        
        <section className='container'>
          <div className="title">
            <span>Bite</span> <span className="ampersand">&</span> <span>Delight</span>
          </div>
          <div className="phrase">
            <p>One bite closer to bliss.</p>
          </div>
          <div className="food-grid">
            <div className="food-item">
              <img src="./Dessert/yema.png" alt="Pizza" />
              <h3>Yema</h3>
              <p>$15.20</p>
            </div>
            <div className="food-item">
              <img src="./Appetizers/chicken wings.png" alt="Salad" />
              <h3>Spicy Chicken Wings</h3>
              <p>$6.50</p>
            </div>
            <div className="food-item">
              <img src="./Salads/bacon salad.png" alt="Dessert" />
              <h3>Bacon and Egg Salad</h3>
              <p>$8.99</p>
            </div>
          </div>
          <div className="see-menu-wrapper">
            <Link to="/foods"><button className="see-menu-button">See Menu </button></Link>
          </div>
        </section>

        <Footer/>
      </div>
    );
  };

  export default Home;