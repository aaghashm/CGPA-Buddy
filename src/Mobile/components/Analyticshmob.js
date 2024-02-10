import "./EasyCGPASection.css";
import { useNavigate } from 'react-router-dom';
const ANALYTICSHMOB = () => {
  const navigate = useNavigate();

  const handleAnalyzemob = () => {
    navigate('/Comingsoon');
  }
  return (
    <section className="EASY-C-G-P-A-SECTION">
      <div className="C-G-P-ICON-FRAME1">
        
        <div className="QUICK-CALC-FRAME">
          <div className="IMAGE-Q-C-PARENT">
            <div className="IMAGE-Q-C">
              <div className="IMAGE-Q-C-INNER">
                <div className="FRAME-CONTAINER">
                  <div className="QUICK-CALCULATE-CGPA-WRAPPER">
                    <h1 className="QUICK-CALCULATE-CGPA1">
                    {"  "}
                    ANALYZE / COMPARE
                    </h1>
                  </div>
                </div>
              </div>
              <div className="BUTTON1" />
            </div>
            <div className="QC-BODY1">
            Analyze your grades and see how you compare   to other students.
            </div>
            <button className="CALCULATE-NOW-BUTTON1" onClick={handleAnalyzemob} >
            <div className="ANALYZE-NOW-BUTTON-FRAME">
              <b className="QCB-BODY">ANALYZE NOW</b>
            </div>
            <img
              className="CALCULATE-NOW-BUTTON-CHILD"
              alt=""
              src="/arrow-1.svg"
            />
          </button>
          </div>
        </div>
        <div className="IMAGE-QC1">
          <img
            className="MARK-CALCULATION-REMOVEBG-PREV-ICON1"
            loading="eager"
            alt=""
            src="/Analyze now.png"
          />
        </div>
      </div>
    </section>
  );
};

export default ANALYTICSHMOB;
