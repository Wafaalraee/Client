import React from 'react';

const Contact = () => {
  return (
    <section>
      <h2>Contact Us</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Your Name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Your Email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" placeholder="Your Message" rows="4" required></textarea>

        <button className="submit" type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;