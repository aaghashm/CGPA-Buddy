import React from 'react';
import "./HeaderMob.css";
import { Link } from 'react-router-dom';

const HEADERMOB = ({ image, word1, word2, word3 }) => {
  return (
    <section className="HEADER">
      <div className="MENU-ITEMS-PARENT">
        <div className="MENU-ITEMS">
          <Link to={"/"} className="LOGO">
            <img
              className="AAGHASH-LOGO-LIGHT-THEME-1"
              loading="eager"
              alt=""
              src="/aaghash-logo.png"
            />
            <h2 className="LOGO-TITLE">CGPA BUDDY</h2>
          </Link>
          <header className="FRAME-PARENT">
            <div className="FRAME-WRAPPER">
              <div className="HOME-PARENT">
                <Link to={"/"} className="HOME">HOME</Link>
                <Link to={"/Comingsoon"} className="ABOUT">ABOUT</Link>
                <Link to={"/Comingsoon"}className="CONTACT">CONTACT</Link>
              </div>
            </div>
            <Link to={"/Comingsoon"} className="PROFILE-ICON-WRAPPER">
              <img
                className="PROFILE-ICON"
                loading="eager"
                alt=""
                src="/iconfilluser@2x.png"
              />
            </Link>
          </header>
        </div>
      <div className="HEADER-CHILD" />
      <div className='Topstyle'>
      <div className="PAGE-TITLE">
          <div className="EASY-CGPA-CALCULATOR-WRAPPER">
            <h1 className="EASY-CGPA-CALCULATOR-CONTAINER">
              <div>
                <span className="ES1">{word1}</span>
                <span className="SPLW">{word2}</span>
              </div>
              <span className="ES1">{word3}</span>
            </h1>
          </div>
        </div>
      <div className="IMAGE-1-1-WRAPPER">
        <img
          className="IMAGE-1-1"
          loading="eager"
          alt=""
          src={image}
        />
      </div> 
        </div>
      
        
      </div>
    </section>
  );
};

export default HEADERMOB;
