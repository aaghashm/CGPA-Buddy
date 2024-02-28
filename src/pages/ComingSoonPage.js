import "./ComingSoonPage.css";
import { useNavigate } from 'react-router-dom';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

const ComingSoonPage = () => {
  const navigate = useNavigate();

  const handlerethome = () => {
    navigate('/');
  
  };
  return (
    <footer className="coming-soon-page">
      <Analytics/>
      <main className="coming-soon-page-content">
        <div className="back-frame" />
        <section className="inner-frame">
          <h1 className="title">
            <span>THIS PAGE IS CURRENTLY</span>
            <span className="span">{` `}</span>
            <span className="under-construction"> UNDER CONSTRUCTION</span>
          </h1>
          <b className="caption">
            <span>But don’t worry, it will be launched</span>
            <span className="very-soon"> very soon!</span>
          </b>
        </section>
        <button className="calculate-now-button1" onClick={handlerethome}>
            <div className="analyze-now-button-frame">
              <b className="qcb-body">{`RETURN HOME`}</b>
            </div>
            <img
              className="calculate-now-button-child"
              alt=""
              src="/arrow-1.svg"
            />
          </button>
      </main>
    </footer>
  );
};

export default ComingSoonPage;
