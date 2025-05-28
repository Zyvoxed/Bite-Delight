import React from 'react';
import '../components/styles.css';
import Navbar from '../components/navbar';
import Header from '../components/header';
import Footer from '../components/footer';

const about_us = () => {
  return (    
    <>
    <Header/>
    <Navbar/>
      <section>
        <section className="item-menu">
          <h2>About Us</h2>
          <div className='about-us-p'>
            <p>At Bite & Delight, we believe that food should do more than fill you up—it should bring joy, spark memories, and make your taste buds dance. We're your go-to destination for discovering mouthwatering recipes, irresistible food finds, and delicious inspiration from around the world. From the first bite to the last, we’re here to make every meal a moment to savor.</p>
          </div>

          <section className='our-team-container'>
            <div className='item-menu'>
              <div className='about-h2'>
                <h3>Our Team</h3>
              </div>
            <div className="item-grid">
              <div className="item-box">
                <img src="./Team/niog.png" alt="dys" />
                <h3>Odyssa Niog</h3>
              </div>
              <div className="item-box">
                <img src="./Team/bayor.png" alt="ed" />
                <h3>Ed Francis Bayor</h3>
              </div>
              <div className="item-box">
                <img src="./Team/ganzan.png" alt="kris" />
                <h3>Krishnah Ganzan</h3>
              </div>
            </div>
            </div>
          </section>
        </section>
      </section>
      <Footer/>
    </> 
  );
};

export default about_us;