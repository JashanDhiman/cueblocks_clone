//import React, { Component } from "react";
//import {
//  loadCaptchaEnginge,
//  LoadCanvasTemplateNoReload,
//  validateCaptcha,
//} from "react-simple-captcha";

//const Captcha = () => {
//  const componentDidMount = () => {
//    loadCaptchaEnginge(6);
//  };

//  const doSubmit = () => {
//    let user_captcha = document.getElementById("user_captcha_input").value;

//    if (validateCaptcha(user_captcha) == true) {
//      alert("Captcha Matched");
//      loadCaptchaEnginge(6);
//      document.getElementById("user_captcha_input").value = "";
//    } else {
//      alert("Captcha Does Not Match");
//      document.getElementById("user_captcha_input").value = "";
//    }
//  };

//  return (
//    <div>
//      <div className="container">
//        <div className="form-group">
//          <div className="col mt-3">
//            <LoadCanvasTemplateNoReload />
//          </div>

//          <div className="col mt-3">
//            <div>
//              <input
//                placeholder="Enter Captcha Value"
//                id="user_captcha_input"
//                name="user_captcha_input"
//                type="text"
//              ></input>
//            </div>
//          </div>

//          <div className="col mt-3">
//            <div>
//              <button class="btn btn-primary" onClick={() => doSubmit()}>
//                Submit
//              </button>
//            </div>
//          </div>
//        </div>
//      </div>
//    </div>
//  );
//};

//export default Captcha;
