import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/base.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
//import Career from "./components/Career";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Contact />} />

        {/*<Route path="/" element={<Career />} />*/}
        {/*<Route path="/contact" element={<Contact />} />*/}
        {/*<Route path="/career" element={<Career />} />*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
