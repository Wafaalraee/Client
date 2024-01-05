import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import './App.css'; // Import your App.css file

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <section className="welcome-section">
        <h2>Your Health,
Our Responsibility</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique, ipsum in fermentum...
        </p>
      </section>
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;