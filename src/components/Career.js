//import { Button } from "@mui/material";
import React from "react";
import ClientsWords from "./ClientsWords";
import Footer from "./Footer";
import Form from "./Form";
//import Context from "./hooks/Context";
import LandingPage from "./LandingPage";
import Navbar from "./Navbar";
const Career = () => {
  //const { globalState, globalDispatch } = useContext(Context);

  const fieldsToShow = [
    {
      field: [
        {
          title: "Name",
          class: "form_row",
          name: "name",
          placeholder: "Enter your name",
          mendetory: true,
          focus: false,
          type: "text",
          variant: "standard",
        },
      ],
    },
    {
      field: [
        {
          title: "Email",
          class: "form_row",
          name: "email",
          placeholder: "Enter your email",
          mendetory: true,
          focus: false,
          type: "email",
          variant: "standard",
        },
      ],
    },
    {
      field: [
        {
          title: "Phone",
          class: "form_row",
          name: "mobilephone",
          placeholder: "Enter your phone",
          mendetory: true,
          focus: false,
          type: "number",
          variant: "standard",
        },
      ],
    },
    {
      field: [
        {
          title: "Job",
          class: "form_row",
          name: "jobtitle",
          placeholder: "Enter job title",
          mendetory: true,
          focus: false,
          type: "text",
          variant: "standard",
        },
      ],
    },
    {
      field: [
        {
          title: "File",
          class: "form_row",
          name: "attachment",
          placeholder: "provide file",
          mendetory: true,
          focus: false,
          type: "file",
          variant: "standard",
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
        {/*{globalState.isLoggedIn ? (
          <h1>hlo every one</h1>
        ) : (
          <h1>bye every one</h1>
        )}
        <Button onClick={() => globalDispatch({ type: "login" })}>
          Say Hii
        </Button>
        <Button onClick={() => globalDispatch({ type: "logout" })}>
          Say bye
        </Button>*/}

        <LandingPage />
        <Form props={[fieldsToShow, initialValues, "_carrer"]} />
        <ClientsWords />
      </div>
      <Footer />
    </>
  );
};

export default Career;
