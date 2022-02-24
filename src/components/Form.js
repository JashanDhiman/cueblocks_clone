import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const Form = ({ props }) => {
  const [fieldsToShow, initialValues, page] = props;
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const focus = {
    name: false,
    email: false,
    mobilephone: false,
    website: false,
    details: false,
    about: false,
  };
  const [focusTitle, setFocusTitle] = useState(focus);
  const focusOn = "focusOn";
  const focusOff = "focusOff";
  var bodyFormData = new FormData();
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "attachment") {
      var file = e.target.files[0];
      setFormValues({ ...formValues, [name]: file });
    } else {
      setFormValues({ ...formValues, [name]: value });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    if (Object.keys(formErrors).length === 0) {
      for (var key in formValues) {
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
  const handleFocus = (t) => {
    setFocusTitle({ ...focusTitle, [t.name]: true });
  };
  const handleBlur = (t) => {
    if (t.value) {
      setFocusTitle({ ...focusTitle, [t.name]: true });
    } else {
      setFocusTitle({ ...focusTitle, [t.name]: false });
    }
  };
  const inputType = (f) => {
    if (f.type === "text") {
      return (
        <input
          type={f.type}
          name={f.name}
          placeholder={f.placeholder}
          id={f.name}
          className="input"
          value={formValues[f.name]}
          onChange={handleChange}
          onFocus={(e) => handleFocus(e.target)}
          onBlur={(e) => handleBlur(e.target)}
        />
      );
    }
    if (f.type === "number") {
      return (
        <input
          mask="+(99) 99999-99999"
          type={f.type}
          name={f.name}
          placeholder={f.placeholder}
          id={f.name}
          className="input"
          value={formValues[f.name]}
          onChange={handleChange}
          onFocus={(e) => handleFocus(e.target)}
          onBlur={(e) => handleBlur(e.target)}
        />
      );
    }
    if (f.type === "checkbox") {
      return (
        <div className="checkbox_div">
          {f.checkBox.map((c, index) => {
            return (
              <div className="checkbox_row" key={index}>
                <input
                  type={f.type}
                  id={c}
                  //value={formValues[f.name]}
                  //onChange={handleChange}
                  //onFocus={(e) => handleFocus(e.target)}
                  //onBlur={(e) => handleBlur(e.target)}
                />
                <label htmlFor={c} style={{ cursor: "pointer" }}>
                  <span></span>
                  {c}
                </label>
              </div>
            );
          })}
        </div>
      );
    }
    if (f.type === "textarea") {
      return (
        <textarea
          type={f.type}
          name={f.name}
          placeholder={f.placeholder}
          id={f.name}
          className="input"
          spellCheck="false"
          value={formValues[f.name]}
          onChange={handleChange}
          onFocus={(e) => handleFocus(e.target)}
          onBlur={(e) => handleBlur(e.target)}
        />
      );
    }
    if (f.type === "file") {
      return (
        <input
          type={f.type}
          name={f.name}
          placeholder={f.placeholder}
          id={f.name}
          className="input"
          value={this}
          onChange={handleChange}
          onFocus={(e) => handleFocus(e.target)}
          onBlur={(e) => handleBlur(e.target)}
        />
      );
    }
    if (f.type === "email") {
      return (
        <input
          type="email"
          name={f.name}
          placeholder={f.placeholder}
          id={f.name}
          className="input"
          value={this}
          onChange={handleChange}
          onFocus={(e) => handleFocus(e.target)}
          onBlur={(e) => handleBlur(e.target)}
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
                  <label className={focusTitle[f.name] ? focusOn : focusOff}>
                    {f.title}
                    {f.mendetory ? <em>*</em> : <span>(optional)</span>}
                  </label>
                  {inputType(f)}
                  <p className="alert">{formErrors[f.title]}</p>
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
{
  /*<f.tag
type={f.type}
name={f.name}
placeholder={f.placeholder}
className={f.tag === "input" ? "input" : ""}
value={f.type === "file" ? this : formValues[f.name]}
onChange={handleChange}
onFocus={(e) => handleFocus(e.target)}
onBlur={(e) => handleBlur(e.target)}
/>;*/
}
