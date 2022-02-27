import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/base.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Career from "./components/Career";
//import GlobalStateProvider from "./components/hooks/GlobalStateProvider";
import MainPage from "./components/MainPage";

function App() {
  return (
    //<GlobalStateProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </BrowserRouter>
    //</GlobalStateProvider>
  );
}

export default App;
