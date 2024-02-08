import "./Footer.css";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer1">
      <div className="mail-footer-frame" />
      <div className="mailidwimage1">
        <div className="footer-top">
          <div className="footer-title">
            <h1 className="footer-titlr">HAVE ANY SUGGESTIONS?</h1>
          </div>
          <div className="social-icons">
          <a href="https://bit.ly/aaghashm" target="_blank" rel="noopener noreferrer">
            <img
              className="social-icons1"
              loading="eager"
              alt=""
              src="/social-icons.svg"
            /></a>
            <a href="https://github.com/aaghashm" target="_blank" rel="noopener noreferrer">
            <img className="social-icons2" alt="" src="/social-icons-1.svg" /></a>
            <a href="https://bit.ly/aaghashm" target="_blank" rel="noopener noreferrer">
  <img className="social-icons3" alt="" src="/social-icons-2.svg" />
</a>

          </div>
        </div>
        <div className="footer-bottom">
          <div className="mail-iid-w-image">
            <img
              className="mail-icon"
              loading="eager"
              alt=""
              src="/mail-icon-1.svg"
            />
            <div className="mailid">
  <a href="mailto:aaghashm@gmail.com" className="mailidf">aaghashm@gmail.com</a>
</div>

          </div>
          <div className="pp-and-tc">
          <Link to="/Comingsoon" className="ppf">Privacy Policy</Link>
          <Link to="/Comingsoon" className="terms-conditions">Terms & conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
