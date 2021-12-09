import React from "react";

import group_img from "../styles/team-group.jpg";

const LandingPage = () => {
  return (
    <div className="career">
      <section className="career_1">
        <div className="container">
          <h2>Work With Us</h2>
          <div>
            <p>
              Do you think outside the box? Are you hip to the latest trends in
              the eCommerce industry? Do you support the idea of your furry
              friends giving you company at work? If you answered yes, then
              CueBlocks is the right workspace for you. We are looking for
              smart, motivated, and ardent individuals who can reimagine
              eCommerce through design, build, and marketing strategies that
              help our clients stand apart from the crowd. Being Shopify, Google
              Adwords, and MailChimp partners, we strive to deliver impeccable
              code, user interface, creative design, and marketing strategies
              that take a consumer's eCommerce experience to the next level.
            </p>
          </div>
        </div>
        <div className="container">
          <h2>A Little Sneak-Peek Into CueBlocks</h2>
          <iframe
            title="Youtube embed"
            width="100%"
            height="330px"
            src="https://www.youtube.com/embed/WeHf1HQa7YA?loop=1&amp;playlist=WeHf1HQa7YA"
            frameBorder="0px"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen=""
          ></iframe>
        </div>
      </section>
      <div className="border-dark"></div>
      <section className="career_2">
        <div className="container">
          <h2>REASONS TO WORK WITH US</h2>
          <div>
            <p>
              Still not convinced? Well, we don't just want to leverage your
              expertise but we would like to make you a part of the CueBlocks
              culture. <br></br>Let us tempt you with some of our irresistible
              offers
            </p>
          </div>
        </div>
      </section>
      <section className="career_3">
        <div className="container">
          <img id="image" src={group_img} alt="group_image" />
          <div>
            <p>
              <span id="highlight">OPEN POSTS</span>
            </p>
            <div className="posts_div">
              <div className="posts">
                <h2>WE ARE HIRING AT CUEBLOCKS</h2>
                <ul>
                  <li>WEB DEVELOPER- MAGENTO</li>
                  <li>WEB DEVELOPER - PHP</li>
                  <li>WEB DEVELOPER - SHOPIFY</li>
                  <li>UI DESIGNER</li>
                </ul>
              </div>
              <div className="posts">
                <ul>
                  <li>EMAIL MARKETING SPECIALIST</li>
                  <li>CRO SPECIALIST</li>
                  <li>(QA) QUALITY ANALYST</li>
                  <li>ORGANIC SEARCH SPECIALIST</li>
                  <li>WEB ANALYTICS SPECIALIST</li>
                  <li>PAID SEARCH SPECIALIST (PPC)</li>
                  <li>LINUX SYSTEM ADMINISTRATOR</li>
                </ul>
              </div>
            </div>
            <div className="posts_div"></div>
          </div>
        </div>
      </section>
      <div className="border-dark"></div>
    </div>
  );
};

export default LandingPage;
