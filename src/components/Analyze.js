import "./Analyze.css";

const Analyze = () => {
  return (
    <section className="analyze">
      <div className="analyze-content">
        <div className="footer-bottom-frame3">
          <div className="q-c-frame">
            <div className="analyze-title1">
              <h1 className="analyze-compare"> ANALYZE / COMPARE</h1>
            </div>
            <div className="button1">
              <div className="qcbbody" />
            </div>
          </div>
          <div className="an-body1">
            Analyze your grades and see how you compare to other students.
          </div>
          <button className="analuse-button">
            <div className="analyseimageframe">
              <b className="analyze-now">{`ANALYZE NOW `}</b>
            </div>
            <img className="analuse-button-child" alt="" src="/arrow-1.svg" />
          </button>
        </div>
      </div>
      <img
        className="analyse-image-icon"
        loading="eager"
        alt=""
        src="/analyse-image@2x.png"
      />
    </section>
  );
};

export default Analyze;
