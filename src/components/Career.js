import React from "react";
import ClientsWords from "./ClientsWords";
import Footer from "./Footer";
import Form from "./Form";
import LandingPage from "./LandingPage";
import Navbar from "./Navbar";

const Career = () => {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <LandingPage />
        <Form />
        <ClientsWords />
      </div>
      <Footer />
    </>
  );
};

export default Career;
