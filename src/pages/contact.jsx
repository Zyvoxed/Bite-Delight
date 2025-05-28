import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Header from '../components/header';
import Footer from '../components/footer';
import '../components/styles.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Contact Form Submission:', formData);
    alert('Thank you for your message!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <Header />
      <Navbar />
      <section>
        <section className="item-menu h2">
          <h2>Get in Touch</h2>
          <section className='contact-container'>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <button type="submit">Send Message</button>
            </form>
            {successMessage && <p className="success-message">{successMessage}</p>}
          </section>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
