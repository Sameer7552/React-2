import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero-section d-flex justify-content-center align-items-center">
      <div className="text-center text-white">
        <h1 className="display-4">Discover Amazing Recipes</h1>
        <p className="lead">Find the best recipes curated just for you.</p>
        <Link to="/" className="btn btn-custom btn-lg mt-3">Explore Now</Link>
      </div>
    </section>
  );
};

export default Hero;
