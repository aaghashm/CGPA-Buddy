import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = ({ titleWord1, titleWord2, titleWord3, image }) => {
  return (
    <section className="header">
      <div className="menu-items" />
      <header className="logo-container">
        <div className="menu-items1">
        <Link to="/"> 
          <div className="logo">
            <img
              className="aaghash-logo-light-theme-1"
              loading="eager"
              alt=""
              src="/aaghash-logo.png"
            />
            <div className="logo-title">CGPA BUDDY</div>
          </div>
          </Link>
          <div className="quick-calc-frame">
            <div className="mark-calculation-removebg-prev">
              <div className="calculate-now-button">
                <Link to="/" className="home">HOME</Link>
                <Link to="/Comingsoon" className="about">ABOUT</Link>
                <Link to="/Comingsoon" className="contact">CONTACT</Link>
              </div>
            </div>
            <Link to="/Comingsoon" className="profile-icon">
              <img
                className="iconfilluser"
                loading="eager"
                alt=""
                src="/iconfilluser@2x.png"
              />
            </Link>
          </div>
        </div>
      </header>
      <div className="p-p-f-terms-frame">
        <div className="title-frame">
          <img
            className="image-1-1"
            loading="eager"
            alt=""
            src={image}
          />
          <div className="page-title">
            <h1 className="easy-cgpa-calculator-container">
              <span>{titleWord1} </span>
              <span className="cgpa">{titleWord2}</span>
              <span> {titleWord3}</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
