import Header from "../components/Header";
import QuickCalculate from "../components/QuickCalculate";
import Analyze from "../components/Analyze";
import Footer from "../components/Footer";
import "./HomePage.css";
import { Analytics } from "@vercel/analytics/react";
const HomePage = () => {
  return (
    <div className="home-page">
       <Analytics />
      <Header titleWord1="EASY" titleWord2="CGPA" titleWord3="CALCULATOR" image='HomePage img.png'/>
     <QuickCalculate />
      <Analyze />
      <Footer />
    </div>
  );
};

export default HomePage;
