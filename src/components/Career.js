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
          class: "form_row",
          name: "name",
          placeholder: "Enter your name",
          mendetory: true,
          focus: false,
          type: "text",
        },
      ],
    },
    {
      field: [
        {
          title: "email",
          class: "form_row",
          name: "email",
          placeholder: "Enter your email",
          mendetory: true,
          focus: false,
          type: "email",
        },
      ],
    },
    {
      field: [
        {
          title: "phone",
          class: "form_row",
          name: "mobilephone",
          placeholder: "Enter your phone",
          mendetory: true,
          focus: false,
          type: "number",
        },
      ],
    },
    {
      field: [
        {
          title: "job",
          class: "form_row",
          name: "jobtitle",
          placeholder: "Enter job title",
          mendetory: true,
          focus: false,
          type: "text",
        },
      ],
    },
    {
      field: [
        {
          title: "file",
          class: "form_row",
          name: "attachment",
          placeholder: "provide file",
          mendetory: true,
          focus: false,
          type: "file",
        },
      ],
    },
  ];
  const initialValues = {
    email: "",
    name: "",
    jobtitle: "",
    mobilephone: "",
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
