import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import in_clk from "../styles/clock-chd.png";
import cz_clk from "../styles/clock-brno.png";
import ravi from "../styles/ravi.png";
import pancham from "../styles/pancham.png";
import linkedin from "../styles/linkedin.svg";
import Form from "./Form";

const Contact = () => {
  const fieldsToShow = [
    {
      field: [
        {
          title: "name",
          placeholder: "Enter your name",
          mendetory: true,
          type: "text",
        },
      ],
    },
    {
      field: [
        {
          title: "email",
          placeholder: "Enter your email",
          mendetory: true,
          type: "email",
        },
      ],
    },
    {
      field: [
        {
          title: "phone",
          placeholder: "Enter your phone",
          mendetory: false,
          type: "number",
        },
      ],
    },
    {
      field: [
        {
          title: "website",
          placeholder: "Enter your website",
          mendetory: false,
          type: "text",
        },
      ],
    },
    {
      field: [
        {
          title: "services that intrests you",
          placeholder: "",
          mendetory: true,
          type: "checkbox",
        },
      ],
    },
    {
      field: [
        {
          title: "Please share details of your story & project requirements",
          placeholder: "",
          mendetory: true,
          type: "textbox",
        },
      ],
    },
    {
      field: [
        {
          title: "How did you hear about CueBlocks?",
          placeholder: "",
          mendetory: false,
          type: "text",
        },
      ],
    },
    {
      field: [
        {
          title: "How did you hear about CueBlocks? (optional)",
          placeholder:
            "Please share details of your story & project requirements",
          mendetory: true,
          type: "textbox",
        },
      ],
    },
  ];
  const initialValues = { name: "", email: "", phone: "", job: "", field: "" };
  return (
    <>
      <Form props={[fieldsToShow, initialValues]} />
      <Navbar />
      <div className="main-content">
        <section>
          <div className="contact_main">
            <div className="contact-left">
              <h2>Let's start the conversation!</h2>
              <p>
                You'll be hearing from either Ravi or Pancham once we receive
                more details.
              </p>
              <ul className="contact-members">
                <li>
                  <div className="contact-member">
                    <img src={ravi} alt="ravi" />
                    <img src={linkedin} alt="linkedin1" className="linkedin" />
                    <p>Ravi Sharma</p>
                  </div>
                </li>
                <li>
                  <div className="contact-member">
                    <img src={pancham} alt="pancham" />
                    <img src={linkedin} alt="linkedin2" className="linkedin" />
                    <p>Pancham Prashar</p>
                  </div>
                </li>
              </ul>

              <Form props={[fieldsToShow, initialValues]} />
            </div>
            <div className="contact-right">
              <h2>We work from</h2>
              <div className="flex-center" style={{ flexDirection: "column" }}>
                <div>
                  <div className="clk">
                    <img className="clk_img" src={in_clk} alt="india" />
                    <h3>CHANDIGARH, IN</h3>
                  </div>
                  S.C.O 822, Second Floor,<br></br> NAC Mani Majra, Chandigarh -
                  160101,<br></br>
                  +91-991-5094372
                </div>
                <div>
                  <div className="clk">
                    <img className="clk_img" src={cz_clk} alt="brno" />
                    <h3>BRNO, CZ</h3>
                  </div>
                  Lidická 700/19, Veveří, Brno - 602 00,
                  <br></br>+420 774-233-112
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
