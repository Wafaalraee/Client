import React from 'react'
import image from "../image/doc1.png";
import "../style/Yourhealth.css";

export default function YourHealth() {
  return (
    <section className="your-health-page welcome-section">
      <div className='doctor-image-section'>
           <div className='doctor-intro'>
              <h1>Your Health is our Responsibility</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                 ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                 laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                 velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                 sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
           </div>
           <div className='doctor-img'>
           <img  src={image}  alt="hero" />
           </div>
        </div>               
    </section>
  )
}
