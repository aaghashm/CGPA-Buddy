
import "./ComingSoonMob.css";

import { useNavigate } from 'react-router-dom';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

const ComingSoonPageMob = () => {
    const navigate = useNavigate();

  const handlereturnhomemob = () => {
    navigate('/');
  }
  return (
    <div className="coming-soon-page-mob">
      <Analytics/>
      <SpeedInsights/>
      <section className="inner-rectangle-frame">
        <h1 className="this-page-is-container">
          <span className="textt">{`THIS PAGE IS `}</span>
          <span className="under-construction">UNDER CONSTRUCTION</span>
        </h1>
        <h1 className="but-dont-worry-container">
          <span>But don’t worry, it will be launched </span>
          <span className="very-soon">very soon</span>
          <span>!</span>
        </h1>
        <button className="CALCULATE-NOW-BUTTON1" onClick={handlereturnhomemob} >
            <div className="ANALYZE-NOW-BUTTON-FRAME">
              <b className="QCB-BODY">RETURN HOME</b>
            </div>
            <img
              className="CALCULATE-NOW-BUTTON-CHILD"
              alt=""
              src="/arrow-1.svg"
            />
          </button>
      </section>
    </div>
  );
};

export default ComingSoonPageMob;
