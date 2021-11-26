import React, { useEffect, useState } from "react";
import { GoThreeBars } from "react-icons/go";
import { BsArrowReturnRight } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import cueblocks from "../styles/CB-New-Logo-Black.png";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [sideBar, setSideBar] = useState(null);
  const width = window.innerWidth; // window size: ;
  /*==================== REMOVE MENU MOBILE ====================*/
  useEffect(() => {
    if (width > 720) {
      setShowNav(true);
    }
  }, [width]);
  const mobileContent = (
    <div className="sidebar" id="mobile-sidebar">
      <i className="cross r_icons" onClick={() => setSideBar(false)}>
        <ImCross />
      </i>
      <ul className="sidebar_li">
        <li className="nav_item">
          <a
            href="#about"
            className="nav_link"
            onClick={(l) => activeOn(l.currentTarget)}
          >
            About
          </a>
        </li>
        <li className="nav_item">
          <a
            href="#team"
            className="nav_link"
            onClick={(l) => activeOn(l.currentTarget)}
          >
            Team
          </a>
        </li>
        <li className="nav_item">
          <a href="#services" className="nav_link">
            Services
          </a>
        </li>
        <ul className="inner_link">
          <li>
            <a
              href="#services"
              className="inner_nav_link"
              onClick={(l) => activeOn(l.currentTarget)}
            >
              <BsArrowReturnRight />
              <span style={{ marginLeft: "10px" }}>Magento</span>
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="inner_nav_link"
              onClick={(l) => activeOn(l.currentTarget)}
            >
              <BsArrowReturnRight />
              <span style={{ marginLeft: "10px" }}>Shopify</span>
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="inner_nav_link"
              onClick={(l) => activeOn(l.currentTarget)}
            >
              <BsArrowReturnRight />
              <span style={{ marginLeft: "10px" }}>Wordpress</span>
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="inner_nav_link"
              onClick={(l) => activeOn(l.currentTarget)}
            >
              <BsArrowReturnRight />
              <span style={{ marginLeft: "10px" }}>PHP</span>
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="inner_nav_link"
              onClick={(l) => activeOn(l.currentTarget)}
            >
              <BsArrowReturnRight />
              <span style={{ marginLeft: "10px" }}>Creative Design</span>
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="inner_nav_link"
              onClick={(l) => activeOn(l.currentTarget)}
            >
              <BsArrowReturnRight />
              <span style={{ marginLeft: "10px" }}>Organic Search</span>
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="inner_nav_link"
              onClick={(l) => activeOn(l.currentTarget)}
            >
              <BsArrowReturnRight />
              <span style={{ marginLeft: "10px" }}>
                Paid Digital Advertising
              </span>
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="inner_nav_link"
              onClick={(l) => activeOn(l.currentTarget)}
            >
              <BsArrowReturnRight />
              <span style={{ marginLeft: "10px" }}>Content</span>
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="inner_nav_link"
              onClick={(l) => activeOn(l.currentTarget)}
            >
              <BsArrowReturnRight />
              <span style={{ marginLeft: "10px" }}>Email Marketing</span>
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="inner_nav_link"
              onClick={(l) => activeOn(l.currentTarget)}
            >
              <BsArrowReturnRight />
              <span style={{ marginLeft: "10px" }}>
                Magento To Shopify Migration
              </span>
            </a>
          </li>
        </ul>
        <li className="nav_item">
          <a
            href="#ourwork"
            className="nav_link"
            onClick={(l) => activeOn(l.currentTarget)}
          >
            Our Work
          </a>
        </li>
        <li className="nav_item">
          <a
            href="#careers"
            className="nav_link"
            onClick={(l) => activeOn(l.currentTarget)}
          >
            Careers
          </a>
        </li>
        <li className="nav_item">
          <a
            href="#contact"
            className="nav_link"
            onClick={(l) => activeOn(l.currentTarget)}
          >
            Contact Us
          </a>
        </li>
        <li className="nav_item">
          <a
            href="#contact"
            className="nav_link"
            onClick={(l) => activeOn(l.currentTarget)}
          >
            CB For Good
          </a>
        </li>
        <li className="nav_item">
          <a
            href="#contact"
            className="nav_link"
            onClick={(l) => activeOn(l.currentTarget)}
          >
            Resources
          </a>
        </li>
        <li className="nav_item">
          <a
            href="#contact"
            className="nav_link"
            onClick={(l) => activeOn(l.currentTarget)}
          >
            Store
          </a>
        </li>
        <li className="nav_item">
          <a
            href="#contact"
            className="nav_link"
            onClick={(l) => activeOn(l.currentTarget)}
          >
            Blog
          </a>
        </li>
      </ul>
    </div>
  );
  const desktopContent = (
    <div className="sidebar" id="desktop-sidebar">
      <i className="cross r_icons" onClick={() => setSideBar(false)}>
        <ImCross />
      </i>
      <ul className="sidebar_li">
        <li className="nav_item">
          <a
            href="#about"
            className="nav_link"
            onClick={(l) => activeOn(l.currentTarget)}
          >
            About
          </a>
        </li>
        <li className="nav_item">
          <a
            href="#team"
            className="nav_link"
            onClick={(l) => activeOn(l.currentTarget)}
          >
            Team
          </a>
        </li>
        <li className="nav_item">
          <a
            href="#services"
            className="nav_link"
            onClick={(l) => activeOn(l.currentTarget)}
          >
            Services
          </a>
        </li>
        <li className="nav_item">
          <a
            href="#ourwork"
            className="nav_link"
            onClick={(l) => activeOn(l.currentTarget)}
          >
            Our Work
          </a>
        </li>
        <li className="nav_item">
          <a
            href="#careers"
            className="nav_link"
            onClick={(l) => activeOn(l.currentTarget)}
          >
            Careers
          </a>
        </li>
        <li className="nav_item">
          <a
            href="#contact"
            className="nav_link"
            onClick={(l) => activeOn(l.currentTarget)}
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
  const sideBarShow = () => {
    if (width > 720) {
      setSideBar(desktopContent);
    } else {
      setSideBar(mobileContent);
    }
  };
  const activeOn = (target) => {
    const firstClass = document.getElementsByClassName("active")[0];
    if (firstClass) {
      firstClass.classList.remove("active");
    }
    target.className += " active";
  };
  return (
    <div className="top_header">
      {sideBar && sideBar}
      <header className="header" id="header">
        {showNav ? (
          <div className="nav_menu" id="nav-Menu">
            <a href="/" className="nav_logo">
              <img src={cueblocks} alt="cb_logo" className="cb_logo" />
            </a>
            <div className="nav_btns">
              <ul className="nav_list grid">
                <li className="nav_item">
                  <a
                    href="#about"
                    className="nav_link"
                    onClick={(l) => activeOn(l.currentTarget)}
                  >
                    About
                  </a>
                </li>
                <li className="nav_item">
                  <a
                    href="#team"
                    className="nav_link"
                    onClick={(l) => activeOn(l.currentTarget)}
                  >
                    Team
                  </a>
                </li>
                <li className="nav_item">
                  <a
                    href="#services"
                    className="nav_link"
                    onClick={(l) => activeOn(l.currentTarget)}
                  >
                    Services
                  </a>
                </li>
                <li className="nav_item">
                  <a
                    href="#ourwork"
                    className="nav_link"
                    onClick={(l) => activeOn(l.currentTarget)}
                  >
                    Our Work
                  </a>
                </li>
                <li className="nav_item">
                  <a
                    href="#careers"
                    className="nav_link"
                    onClick={(l) => activeOn(l.currentTarget)}
                  >
                    Careers
                  </a>
                </li>
                <li className="nav_item">
                  <a
                    href="#contact"
                    className="nav_link"
                    onClick={(l) => activeOn(l.currentTarget)}
                  >
                    Contact
                  </a>
                </li>
              </ul>
              <div className="nav_toggle r_icons" id="nav-Toggle">
                <i className="r_icons" onClick={sideBarShow}>
                  <GoThreeBars />
                </i>
              </div>
            </div>
          </div>
        ) : (
          <div className="nav_menu" id="nav-Menu">
            <a href="/" className="nav_logo">
              <img src={cueblocks} alt="cb_logo" className="cb_logo" />
            </a>
            <div className="nav_toggle r_icons" id="nav-Toggle">
              <i className="r_icons" onClick={sideBarShow}>
                <GoThreeBars />
              </i>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
