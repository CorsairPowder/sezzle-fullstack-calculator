import { useState } from "react";

import "./styles/App.css";
import "./styles/Background.css";
import "./styles/Calculator.css";
import "./styles/Animations.css";

import Calculator from "./components/Calculator";

function App() {
  const [pulse, setPulse] = useState(false);

  const triggerPulse = () => {
    setPulse(true);

    setTimeout(() => {
      setPulse(false);
    }, 700);
  };

  return (
    <>
      <div className={`background ${pulse ? "pulse" : ""}`}>
        <div className="orb orb1"></div>
        <div className="orb orb2"></div>
        <div className="orb orb3"></div>
      </div>

      <Calculator onCalculate={triggerPulse} />
    </>
  );
}

export default App;