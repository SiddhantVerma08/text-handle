import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState("light");

  const toggleMode = () => {
    if (darkMode === "light") {
      setDarkMode("dark")
      document.body.style.backgroundColor = "#146b78";
    } else {
      setDarkMode("light")
      document.body.style.backgroundColor = "white";
    }
    
  }
  return (
    <>
      <Navbar title="Text Handler" mode={darkMode} toggleMode={toggleMode}/>
      <div className="container">
        <TextForm heading="Enter text to analyze" mode={darkMode}/>
      </div>
      
    </>
  );
}

export default App;
