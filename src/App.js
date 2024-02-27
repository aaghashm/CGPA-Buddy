import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import QuickCGPACalculator from "./pages/QuickCGPACalculator";
import HomePage from "./pages/HomePage";
import ComingSoonPage from "./pages/ComingSoonPage";
import MobileHomePage from "./Mobile/pages/MobileHomePage";
import ComingSoonPageMob from "./Mobile/pages/ComingSoonMob";
import QuickCGPAMob from "./Mobile/pages/QuickCGPAMob";

function App() {
  // State to track whether the screen size is mobile or not
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 798); // Adjust the screen width threshold as needed
    };

    handleResize(); // Call once to set the initial state
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Routes>
      {/* Conditionally render the appropriate component based on screen size */}
      <Route
        path="/"
        element={isMobile ? <MobileHomePage /> : <HomePage />}
      />
      <Route
        path="/QuickCalculate"
        element={isMobile ? <QuickCGPAMob /> : <QuickCGPACalculator />}
      />
      <Route
        path="/Comingsoon"
        element={isMobile ? <ComingSoonPageMob /> : <ComingSoonPage />}
      />
    </Routes>
  );
}
export default App;
