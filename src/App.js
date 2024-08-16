import { Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import Header from "./components/header/Header";
import HomePage from "./pages/home/HomePage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <div className="App bg-body-tertiary">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
