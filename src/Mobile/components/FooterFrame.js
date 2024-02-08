import { Link } from "react-router-dom";
import "./FooterFrame.css";

const FOOTERFRAME = () => {
  return (
    <footer className="FOOTER-FRAME">
      <div className="FOOTER-FRAME1">
        <div className="FOOTER2">
          <div className="FOOTER-CHILD" />
          <div className="FOOTER-TITLE-FRAME">
            <div className="FOOTER-TOP1">
              <div className="FOOTER-TITLE1">
                <h1 className="FOOTER-TITLR1">HAVE ANY SUGGESTIONS?</h1>
              </div>
              <div className="SOCIAL-ICONS4">
              <a href="https://bit.ly/aaghashm" target="_blank" rel="noopener noreferrer">
                <img
                  className="SOCIAL-ICONS5"
                  loading="eager"
                  alt=""
                  src="/social-icons.svg"
                /></a>
                <a href="https:github.com/aaghashm" target="_blank" rel="noopener noreferrer">
                <img
                  className="SOCIAL-ICONS6"
                  alt=""
                  src="/social-icons-1.svg"
                /></a>
                <a href="https://bit.ly/aaghashm" target="_blank" rel="noopener noreferrer">
                <img
                  className="SOCIAL-ICONS7"
                  alt=""
                  src="/social-icons-2.svg"
                /></a>
              </div>
            </div>
            <div className="FOOTER-BOTTOM1">
              <div className="MAIL-IID-W-IMAGE1">
                <img
                  className="MAIL-ICON1"
                  loading="eager"
                  alt=""
                  src="/mail-icon-1.svg"
                />
                <div className="MAILID1">
                  <a href="mailto:aaghashm@gmail.com" className="MAILIDF1">aaghashm@gmail.com</a>
                </div>
              </div>
              <div className="PP-AND-TC1">
                <Link to={"/Comingsoon"} className="PPF1">Privacy Policy</Link>
                <div className="TERMS-CONDITIONS1">{`Terms & conditions`}</div>
              </div>
            </div>
          </div>
        </div>
        <img className="ARROW-47-ICON1" loading="eager" alt="" />
      </div>
    </footer>
  );
};

export default FOOTERFRAME;
