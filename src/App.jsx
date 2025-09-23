import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CyberProgramPage from "./pages/CyberProgramPage";
import Header from "./components/Home/Header";
import Footer from "./components/Home/Footer";
import ContuctUspage from "./pages/ContuctUspage";

function App() {
  return (
    <>
      <Header/>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cyber-program" element={<CyberProgramPage/>} />
        <Route path="/contact" element={<ContuctUspage/>} />
      </Routes>

      <Footer/>
    </>
  );
}

export default App;
