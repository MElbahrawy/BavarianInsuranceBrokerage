import { Route, Routes, Navigate } from "react-router-dom";
import "animate.css/animate.compat.css";
import "./App.css";
import React from "react";
import Header from "./components/header/Header";
import HomePage from "./pages/home/HomePage";
import MedicalPage from "./pages/services/MedicalPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/utilities/ScrollToTop";
import ContactPage from "./pages/contact/ContactPage";
import AboutPage from "./pages/about/AboutPage";
import ClaimsPage from "./pages/claims/ClaimsPage";
import DemoPage from "./pages/services/DemoPage";
function App() {
  return (
    <div className="App bg-body-tertiary">
      <Header />
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/Medical-Insurance" element={<MedicalPage />} />
        <Route path="/Demo" element={<DemoPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Claims" element={<ClaimsPage />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
