import "./QuickCalculate.css";

const QuickCalculate = () => {
  return (
    <section className="quick-calculate">
      <div className="image-qc">
        <img
          className="mark-calculation-removebg-prev-icon"
          loading="eager"
          alt=""
          src="/mark-calculationremovebgpreview-1@2x.png"
        />
      </div>
      <div className="arrow-vector">
        <div className="quick-calculate-content">
          <div className="frame-parent">
            <div className="frame-wrapper10">
              <div className="frame-wrapper11">
                <div className="quick-calculate-cgpa-wrapper">
                  <h1 className="quick-calculate-cgpa">
                    {" "}
                    QUICK CALCULATE CGPA
                  </h1>
                </div>
              </div>
            </div>
            <div className="button" />
          </div>
          <div className="qc-body">
            ENTER YOUR GRADES TO QUICKLY CALCULATE YOUR CGPA.
          </div>
          <button className="calculate-now-button1">
            <div className="analyze-now-button-frame">
              <b className="qcb-body">{`CALCULATE NOW `}</b>
            </div>
            <img
              className="calculate-now-button-child"
              alt=""
              src="/arrow-1.svg"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default QuickCalculate;
