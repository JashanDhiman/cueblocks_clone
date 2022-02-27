import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import styled from "@emotion/styled";
const Form = ({ props }) => {
  const [fieldsToShow, initialValues, page] = props;
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [attachmentError, setAttachmentError] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const [checked, setChecked] = useState({
    Conversion: false,
    "Creative Design": false,
    "Digital Advertising": false,
    "Email Marketing": false,
    Magento: false,
    "Organic Search": false,
    Other: false,
    Shopify: false,
    "Web Development": false,
    Wordpress: false,
  });
  //const focus = {
  //  name: false,
  //  email: false,
  //  mobilephone: false,
  //  website: false,
  //  details: false,
  //  about: false,
  //};
  //const [focusTitle, setFocusTitle] = useState(focus);
  //const focusOn = "focusOn";
  //const focusOff = "focusOff";
  var bodyFormData = new FormData();
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "attachment") {
      const uplodedFile = e.target.files[0];
      if (
        (uplodedFile.type === "application/pdf" ||
          uplodedFile.type === "text/plain") &&
        uplodedFile.size <= 2 * 1024 * 1024
      ) {
        setFormValues({ ...formValues, [name]: uplodedFile });
      } else {
        if (uplodedFile.size > 2 * 1024 * 1024) {
          setAttachmentError("Size Exceded");
        } else if (
          uplodedFile.type !== "application/pdf" ||
          uplodedFile.type !== "text/plain"
        ) {
          setAttachmentError("File Format is wrong");
        }
      }
    } else if (e.target.type === "checkbox") {
      setChecked({ ...checked, [e.target.id]: e.target.checked });
      if (e.target.checked) {
        let listStr = formValues[e.target.name]
          ? `${formValues[e.target.name]}, ${e.target.id}`
          : formValues[e.target.name] + e.target.id;
        setFormValues({ ...formValues, [name]: listStr });
      }
    } else {
      setFormValues({ ...formValues, [name]: value });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    if (Object.keys(formErrors).length === 0) {
      if (page === "_carrer") {
        for (let key in formValues) {
          bodyFormData.append(key, formValues[key]);
        }
        axios({
          method: "post",
          url: "https://apistaging.cueblocks.com/",
          data: bodyFormData,
          headers: { "Content-Type": "multipart/form-data" },
        })
          .then((response) => {
            console.log(response);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      if (page === "_contact") {
        var fields = [];
        for (let key in formValues) {
          fields.push({ name: key, value: formValues[key] });
        }
        let data = {
          submittedAt: new Date().getTime(),
          fields: fields,

          legalConsentOptions: {
            consent: {
              consentToProcess: true,
              text: "I agree to allow Example Company to store and process my personal data.",
              communications: [
                {
                  value: true,
                  subscriptionTypeId: 999,
                  text: "I agree to receive marketing communications from Example Company.",
                },
              ],
            },
          },
        };
        var final_data = JSON.stringify(data);
        fetch(
          "https://api.hsforms.com/submissions/v3/integration/submit/6881310/78c7882f-e577-4fcf-80ff-e451b4a1b6bf",
          {
            method: "post",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: final_data,
          }
        )
          .then((response) => {
            console.log(response);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors, isSubmit]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if ("name" in initialValues) {
      if (!values.name) {
        errors.name = "username is required!";
      }
    }
    if ("email" in initialValues) {
      if (!values.email) {
        errors.email = "email is required!";
      } else if (!regex.test(values.email)) {
        errors.email = "This is not valid email format!";
      }
    }
    if ("mobilephone" in initialValues) {
      if (!values.mobilephone) {
        errors.mobilephone = "phone no is required!";
      }
    }
    if ("jobtitle" in initialValues) {
      if (!values.jobtitle) {
        errors.jobtitle = "job title is required!";
      }
    }
    return errors;
  };
  //const handleFocus = (t) => {
  //  setFocusTitle({ ...focusTitle, [t.name]: true });
  //};
  //const handleBlur = (t) => {
  //  if (t.value) {
  //    setFocusTitle({ ...focusTitle, [t.name]: true });
  //  } else {
  //    setFocusTitle({ ...focusTitle, [t.name]: false });
  //  }
  //};
  const Input = styled("input")({
    display: "none",
  });
  const inputType = (f) => {
    if (f.type === "text") {
      return (
        //<input
        //  type={f.type}
        //  name={f.name}
        //  placeholder={f.placeholder}
        // //  id={f.name}
        //  className="input"
        //  value={formValues[f.name]}
        //  onChange={handleChange}
        //  onFocus={(e) => handleFocus(e.target)}
        //  onBlur={(e) => handleBlur(e.target)}
        ///>
        <TextField
          label={f.title}
          required={f.mendetory}
          variant={f.variant}
          name={f.name}
          value={formValues[f.name]}
          onChange={handleChange}
          style={{ width: "100%" }}
        />
      );
    }
    if (f.type === "number") {
      return (
        <TextField
          type="number"
          label={f.title}
          required={f.mendetory}
          variant={f.variant}
          name={f.name}
          value={formValues[f.name]}
          onChange={handleChange}
          style={{ width: "100%" }}
        />
      );
    }
    if (f.type === "checkbox") {
      return (
        <div className="checkbox_div">
          {f.checkBox.map((c, index) => {
            return (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    type="checkbox"
                    id={c}
                    name={f.name}
                    checked={checked[c]}
                    onChange={(e) => handleChange(e)}
                  />
                }
                label={c}
              />
            );
          })}
        </div>
      );
    }
    if (f.type === "textarea") {
      return (
        //<textarea
        //  type={f.type}
        //  name={f.name}
        //  placeholder={f.placeholder}
        //  id={f.name}
        //  className="input"
        //  spellCheck="false"
        //  value={formValues[f.name]}
        //  onChange={handleChange}
        //  onFocus={(e) => handleFocus(e.target)}
        //  onBlur={(e) => handleBlur(e.target)}
        ///>
        <TextField
          multiline
          rows={8}
          label={f.title}
          required={f.mendetory}
          variant={f.variant}
          name={f.name}
          value={formValues[f.name]}
          onChange={handleChange}
          style={{ width: "100%" }}
        />
      );
    }
    if (f.type === "file") {
      return (
        <>
          <span>
            Attachment(.png, .pdf, .txt, .doc) <br></br>Max size allowed-2 MB
          </span>
          <label htmlFor="contained-button-file">
            <Input
              accept=".png, .pdf, .txt, .doc"
              id="contained-button-file"
              multiple
              type="file"
              name={f.name}
              value={this}
              onChange={handleChange}
            />
            <Button variant="contained" component="span" required={f.mendetory}>
              Upload
            </Button>
          </label>
          <span>
            {attachmentError ? attachmentError : formValues[f.name].name}
          </span>
        </>
      );
    }
    if (f.type === "email") {
      return (
        <TextField
          type="email"
          label={f.title}
          required={f.mendetory}
          variant={f.variant}
          name={f.name}
          value={formValues[f.name]}
          onChange={handleChange}
          style={{ width: "100%" }}
        />
      );
    }
  };
  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 &&
        isSubmit &&
        toast.success("Applied Successfully", {
          toastId: "*",
        })}
      <form
        className="apply_form"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <h2>
          Apply Now!<br></br>
          <span id="indicate">
            (<em>* </em>Indicates Mandatory Fields)
          </span>
        </h2>
        <div className={`form_inputs${page}`}>
          {fieldsToShow.map((entry, index) => {
            return entry.field.map((f) => {
              return (
                <div className={f.class} key={index}>
                  {/*<label
                    className={
                      f.focus && focusTitle[f.name] ? focusOn : focusOff
                    }
                  >
                    {f.title}
                    {f.mendetory ? <em>*</em> : <span>(optional)</span>}
                  </label>*/}
                  {inputType(f)}
                  {/*<p className="alert">{formErrors[f.title]}</p>*/}
                </div>
              );
            });
          })}
        </div>
        <input type="submit" className="submit_button" />
      </form>
    </div>
    // <ReactInputDateMask mask="dd/mm/yyyy" />
    // <InputMask mask="+(99) 99999-99999" />
  );
};

export default Form;
