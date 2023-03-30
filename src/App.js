import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

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
      <Router>
        <Navbar title="Text Handler" mode={darkMode} toggleMode={toggleMode} />
        <Routes>
          <Route exact path="/" element={<TextForm heading="Enter text to analyze" mode={darkMode} />} />
          <Route exact path="about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
