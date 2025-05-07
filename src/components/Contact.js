import React from 'react';

const Contact = () => (
  <section id="contact">
    <h5>Contact Me</h5>
    <h6>Email: <a href="calforniahpuleng@gmail.com">calforniahpuleng@gmail.com</a></h6>
    

    <h5>Get In Touch</h5>
    <form action="https://formspree.io/f/xeoggkqv" method="POST">
      <input type="text" name="first_name" placeholder="First Name" required />
      <input type="text" name="last_name" placeholder="Last Name" required />
      <input type="email" name="email" placeholder="Email" required />
      <textarea name="message" rows="4" placeholder="Type your message here" required></textarea>
      <button type="submit">Submit</button>
    </form>
  </section>
);

export default Contact;
