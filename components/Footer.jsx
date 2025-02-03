import React from "react";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer-logo">
        <img src="/logo.jpg" alt="Yatri Cabs Logo" />
      </div>

      <div class="footer-nav">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">News</a>
        <a href="#">Contact</a>
        <a href="#">Privacy Policy</a>
      </div>

      <div class="newsletter">
        <label htmlFor="email">Newsletter</label>
        <input type="email" id="email" placeholder="Email" />
        <button>&rarr;</button>
      </div>

      <div class="copyright">All Copyrights are reserved by YATRI CABS</div>
    </footer>
  );
};

export default Footer;
