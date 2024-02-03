import "./Footer.css";

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
            <img
              className="social-icons1"
              loading="eager"
              alt=""
              src="/social-icons.svg"
            />
            <img className="social-icons2" alt="" src="/social-icons-1.svg" />
            <img className="social-icons3" alt="" src="/social-icons-2.svg" />
          </div>
        </div>
        <div className="footer-bottom">
          <div className="mail-iid-w-image">
            <img
              className="mail-icon"
              loading="eager"
              alt=""
              src="/mail-icon.svg"
            />
            <div className="mailid">
              <div className="mailidf">aaghashm@gmail.com</div>
            </div>
          </div>
          <div className="pp-and-tc">
            <div className="ppf">Privacy Policy</div>
            <div className="terms-conditions">{`Terms & conditions`}</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
