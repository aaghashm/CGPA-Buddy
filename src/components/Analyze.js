import "./QuickCalculate.css";
import { useNavigate } from 'react-router-dom';
const QuickCalculate = () => {
  const navigate = useNavigate();

  const handleAnalyzeClick = () => {
    navigate('/Comingsoon');
  
  };

  return (
    <section className="quick-calculate">
      
      <div className="arrow-vector">
        <div className="quick-calculate-content">
          <div className="frame-parent">
            <div className="frame-wrapper10">
              <div className="frame-wrapper11">
                <div className="quick-calculate-cgpa-wrapper">
                  <h1 className="quick-calculate-cgpa">
                    {" "}
                    ANALYZE / COMPARE
                  </h1>
                </div>
              </div>
            </div>
            <div className="button" />
          </div>
          <div className="qc-body">
            Analyze your grades and see how you compare   to other students.
          </div>
          <button className="calculate-now-button1" onClick={handleAnalyzeClick}>
            <div className="analyze-now-button-frame">
              <b className="qcb-body">{`ANALYZE NOW `}</b>
            </div>
            <img
              className="calculate-now-button-child"
              alt=""
              src="/arrow-1.svg"
            />
          </button>
        </div>
      </div>
      <div className="image-qc">
        <img
          className="mark-calculation-removebg-prev-icon"
          loading="eager"
          alt=""
          src="/Analyze now.png"
        />
      </div>
    </section>
  );
};

export default QuickCalculate;
