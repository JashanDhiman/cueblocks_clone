import React from "react";
import ClientsWords from "./ClientsWords";
import Footer from "./Footer";
import Form from "./Form";
import LandingPage from "./LandingPage";
import Navbar from "./Navbar";

const Career = () => {
  const fieldsToShow = [
    {
      field: [
        {
          title: "name",
          placeholder: "Enter your name",
          mendetory: true,
        },
      ],
    },
    {
      field: [
        {
          title: "email",
          placeholder: "Enter your email",
          mendetory: true,
        },
      ],
    },
    {
      field: [
        {
          title: "phone",
          placeholder: "Enter your phone",
          mendetory: true,
        },
      ],
    },
    {
      field: [
        {
          title: "job",
          placeholder: "Enter job title",
          mendetory: true,
        },
      ],
    },
    {
      field: [
        {
          title: "file",
          placeholder: "provide file",
          mendetory: true,
        },
      ],
    },
    {
      field: [
        {
          title: "captcha",
          placeholder: "Enter the provided captcha",
          mendetory: true,
        },
      ],
    },
  ];
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    job: "",
    file: "",
    captcha: "",
  };
  return (
    <>
      <Navbar />
      <div className="main-content">
        <LandingPage />
        <Form props={[fieldsToShow, initialValues]} />
        <ClientsWords />
      </div>
      <Footer />
    </>
  );
};

export default Career;
