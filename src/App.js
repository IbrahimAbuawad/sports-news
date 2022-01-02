import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import OTP from "./components/OTP/OTP.jsx";
import Header from "./components/Header/Header.jsx";
import 'animate.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/OTP" element={<OTP />} />
      </Routes>
    </Router>
  );
}

export default App;
