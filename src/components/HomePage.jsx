import React from "react";
import Contact from './Contact';
import AboutUs from './AboutUs';
import YourHealth from "./YourHealth";
const HomePage = () => {
  return (
    <div>  
      <YourHealth />
      <AboutUs />
      <Contact />
    </div>
  );
};

export default HomePage;