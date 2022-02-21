import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const Form = ({ props }) => {
  const [fieldsToShow, initialValues, page] = props;
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  var bodyFormData = new FormData();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "attachment") {
      var file = e.target.files[0];
      console.log(formValues);
      setFormValues({ ...formValues, [name]: file });
    } else {
      setFormValues({ ...formValues, [name]: value });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
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
          {/*{console.log(formValues)}*/}
          {fieldsToShow.map((entry) => {
            return entry.field.map((f, index) => {
              return (
                <div className={`form_row${page}`} key={index}>
                  <label>
                    {f.title}
                    {f.mendetory ? <em>*</em> : <span>(optional)</span>}
                  </label>
                  <f.tag
                    type={f.type}
                    name={f.name}
                    placeholder={f.placeholder}
                    //value={formValues[f.name]}
                    onChange={handleChange}
                  />
                  <p className="alert">{formErrors[f.title]}</p>
                </div>
              );
            });
          })}
          {/*<div className="form_row">
            <label>
              Email<em>*</em>
            </label>
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            <p className="alert">{formErrors.email}</p>
          </div>
          <div className="form_row">
            <label>
              Phone <em>*</em>
            </label>
            <input
              type="number"
              name="phone"
              onChange={handleChange}
              value={formValues.number}
              placeholder="Enter your phone"
            />
            <p className="alert">{formErrors.phone}</p>
          </div>
          <div className="form_row">
            <label>
              Job<em>*</em>
            </label>
            <input
              type="text"
              name="job"
              placeholder="Enter job title"
              value={formValues.job}
              onChange={handleChange}
            />
            <p className="alert">{formErrors.job}</p>
          </div>
          <div className="form_row">
            <label>
              Attachment(.png, .pdf, .txt, .doc)
              <em>*</em>
              <br></br>
              Max size allowed-2 MB
            </label>
            <input
              type="file"
              name="file"
              value={formValues.file}
              onChange={handleChange}
            />
            <p className="alert">{formErrors.file}</p>
          </div>*/}
        </div>
        <input type="submit" className="submit_button" />
      </form>
    </div>
    // <ReactInputDateMask mask="dd/mm/yyyy" />
    // <InputMask mask="+(99) 99999-99999" />
  );
};

export default Form;
