import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white pt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5 className='color-orange'>About Us</h5>
            <p>
              MyRecipeApp is your go-to platform for discovering and sharing the best recipes from around the world. Join our community today!
            </p>
          </div>
          <div className="col-md-4">
            <h5 className='color-orange'>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white">Home</Link></li>
              <li><Link to="/about" className="text-white">About</Link></li>
              <li><Link to="/contact" className="text-white">Contact</Link></li>
              <li><Link to="/recipes" className="text-white">Recipes</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className='color-orange'>Contact Us</h5>
            <ul className="list-unstyled">
              <li><i className="fas fa-map-marker-alt"></i> 123 Main Street, City, Country</li>
              <li><i className="fas fa-phone"></i> +1 234 567 890</li>
              <li><i className="fas fa-envelope"></i> info@myrecipeapp.com</li>
            </ul>
            <div className="social-icons mt-3">
              <a href="#" className="text-white me-3"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-white me-3"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white me-3"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-white"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
        <hr className="bg-white" />
        <div className="text-center pb-3">
          &copy; {new Date().getFullYear()} MyRecipeApp. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
