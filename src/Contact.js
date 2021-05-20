import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="contact">
        <div className="product__info">
          <h1>About us</h1>
          <h3>Hitesh Jain</h3>
          <p>We Provide Best Electronics Product</p><p> in 
              Reasonable price</p>
        </div>
        <div className="product__info">
          <h1>Contact us</h1>
          <p><a href="tel:+4733378901">+47 333 78 901</a></p>
        
        </div>
        <div className="product__info">
          <h1>Address</h1>
          <p>Shop No:8, Old Parsi Chawl, Opp New Dahisar Apt,</p>
              <p>Hari Shakar Joshi Rd, Dahisar East,</p>
             <p> Mumbai : 400068.
          </p>
        </div>
      </div>
    );
}

export default Contact;
