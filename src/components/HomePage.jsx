import React from "react";
import Contact from './Contact';
import AboutUs from './AboutUs';
const HomePage = () => {
  return (
      <div>  
          <section className="welcome-section">
            <h2>Your Health, Our Responsibility</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique, ipsum in fermentum...</p>
          </section>
          <AboutUs />
          <Contact />
        </div>
   
  );
};

export default HomePage;