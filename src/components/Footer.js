import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <ul className="flex-row">
          <li>About</li>
          <li>Services</li>
          <li>Our Work</li>
          <li>Resources</li>
          <li>Sitemap</li>
          <li>Blog</li>
          <li>Store</li>
          <li>Contact Us</li>
        </ul>
        <span style={{ float: "right" }}>
          <a href="/">Privacy Policy</a>
        </span>
        <br></br>
        <p>
          © Copyright since 2005 Cue Blocks Technologies Pvt. Ltd. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
