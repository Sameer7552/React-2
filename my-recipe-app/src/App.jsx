// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import DarkModeToggle from './components/DarkModeToggle';

const App = () => {
  return (
    <Router>
      <Header />
      <Hero />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/recipe/:id" element={<DetailPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
