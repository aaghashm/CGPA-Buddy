import Header from "../components/Header";
import QuickCalculate from "../components/QuickCalculate";
import Analyze from "../components/Analyze";
import Footer from "../components/Footer";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <QuickCalculate />
      <Analyze />
      <Footer />
    </div>
  );
};

export default HomePage;
