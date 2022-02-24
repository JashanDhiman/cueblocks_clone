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
          tag: "input",
          title: "name",
          name: "name",
          placeholder: "Enter your name",
          mendetory: true,
          type: "text",
        },
      ],
    },
    {
      field: [
        {
          tag: "input",
          title: "email",
          name: "email",
          placeholder: "Enter your email",
          mendetory: true,
          type: "email",
        },
      ],
    },
    {
      field: [
        {
          tag: "input",
          title: "phone",
          name: "mobilephone",
          placeholder: "Enter your phone",
          mendetory: true,
          type: "number",
        },
      ],
    },
    {
      field: [
        {
          tag: "input",
          title: "job",
          name: "jobtitle",
          placeholder: "Enter job title",
          mendetory: true,
          type: "text",
        },
      ],
    },
    {
      field: [
        {
          tag: "input",
          title: "file",
          name: "attachment",
          placeholder: "provide file",
          mendetory: true,
          type: "file",
        },
      ],
    },
  ];
  const initialValues = {
    email: "jashan@cueblocks.com",
    name: "Jashan Dhiman",
    jobtitle: "Testing - Api Creation",
    mobilephone: "9872076386",
    attachment: "",
  };
  return (
    <>
      <Navbar />
      <div className="main-content">
        <LandingPage />
        <Form props={[fieldsToShow, initialValues, "_carrer"]} />
        <ClientsWords />
      </div>
      <Footer />
    </>
  );
};

export default Career;
