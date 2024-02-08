import React from 'react';
import "./HeaderMob.css";

const HEADERMOB = ({ image, word1, word2, word3 }) => {
  return (
    <section className="HEADER">
      <div className="HEADER-CHILD" />
      <div className="IMAGE-1-1-WRAPPER">
        <img
          className="IMAGE-1-1"
          loading="eager"
          alt=""
          src={image}
        />
      </div>
      <div className="MENU-ITEMS-PARENT">
        <div className="MENU-ITEMS">
          <div className="LOGO">
            <img
              className="AAGHASH-LOGO-LIGHT-THEME-1"
              loading="eager"
              alt=""
              src="/aaghash-logo.png"
            />
            <h2 className="LOGO-TITLE">CGPA BUDDY</h2>
          </div>
          <header className="FRAME-PARENT">
            <div className="FRAME-WRAPPER">
              <div className="HOME-PARENT">
                <h3 className="HOME">HOME</h3>
                <h3 className="ABOUT">ABOUT</h3>
                <h3 className="CONTACT">CONTACT</h3>
              </div>
            </div>
            <div className="PROFILE-ICON-WRAPPER">
              <img
                className="PROFILE-ICON"
                loading="eager"
                alt=""
                src="/iconfilluser@2x.png"
              />
            </div>
          </header>
        </div>
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
      </div>
    </section>
  );
};

export default HEADERMOB;
