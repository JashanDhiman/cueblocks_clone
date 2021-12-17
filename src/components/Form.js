import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Form = () => {
  const initialValues = { name: "", email: "", phone: "", job: "", file: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors, isSubmit]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "username is required!";
    }
    if (!values.email) {
      errors.email = "email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not valid email format!";
    }
    if (!values.phone) {
      errors.phone = "phone no is required!";
    }
    if (!values.job) {
      errors.job = "job title is required!";
    }
    if (!values.file) {
      errors.file = "file is required!";
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

      <form className="apply_form" onSubmit={handleSubmit}>
        <h2>
          Apply Now!<br></br>
          <span id="indicate">
            (<em>* </em>Indicates Mandatory Fields)
          </span>
        </h2>
        <div className="form_inputs">
          <div className="form_row">
            <label>
              Name <em>*</em>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formValues.name}
              onChange={handleChange}
            />
            <p className="alert">{formErrors.name}</p>
          </div>
          <div className="form_row">
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
          </div>
        </div>
        <input type="submit" className="submit_button" />
      </form>
    </div>
  );
};

export default Form;
