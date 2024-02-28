import "./EasyCGPASection.css";
import { useNavigate } from 'react-router-dom';
const EASYCGPASECTION = () => {
  const navigate = useNavigate();

  const handleCalculateNowMob = () => {
    navigate('/QuickCalculate');
  }
  return (
    <section className="EASY-C-G-P-A-SECTION">
      <div className="C-G-P-ICON-FRAME">
        <div className="IMAGE-QC1">
          <img
            className="MARK-CALCULATION-REMOVEBG-PREV-ICON1"
            loading="eager"
            alt=""
            src="/Quick Calculate.png"
          />
        </div>
        <div className="QUICK-CALC-FRAME">
          <div className="IMAGE-Q-C-PARENT">
            <div className="IMAGE-Q-C">
              <div className="IMAGE-Q-C-INNER">
                <div className="FRAME-CONTAINER">
                  <div className="QUICK-CALCULATE-CGPA-WRAPPER">
                    <h1 className="QUICK-CALCULATE-CGPA1">
                      {"  "}
                      QUICK CALCULATE CGPA
                    </h1>
                  </div>
                </div>
              </div>
              <div className="BUTTON1" />
            </div>
            <div className="QC-BODY1">
              Enter your grades to quickly calculate your CGPA.
              <a href='https://www.linkedin.com/in/aaghash-m-105278250/'><p><b>Created by - AAGHASH M , II AIML</b></p></a>
            </div>
            <button className="CALCULATE-NOW-BUTTON1" onClick={handleCalculateNowMob} style={{width:"99%"}}>
            <div className="ANALYZE-NOW-BUTTON-FRAME">
              <b className="QCB-BODY">CALCULATE NOW</b>
            </div>
            <img
              className="CALCULATE-NOW-BUTTON-CHILD"
              alt=""
              src="/arrow-1.svg"
            />
          </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EASYCGPASECTION;
