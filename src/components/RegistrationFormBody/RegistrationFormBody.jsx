import React from "react";
import RegisterFormCss from "./RegistrationFormBody.module.css";
import image1 from "../../images/bg.png";

import "font-awesome/css/font-awesome.min.css";

import "@fortawesome/fontawesome-svg-core/styles.css";

const RegistrationFormBody = () => {
  return (
    <div className={RegisterFormCss.BackgroundImagecontainer}>
      <img src={image1} alt="" />
      <div className={RegisterFormCss.MAinContariner}>
        <div className={RegisterFormCss.Recontainer}>
          <form action="">
            <div className={RegisterFormCss.row}>
              <div className={RegisterFormCss.col}>
                <h3 className={RegisterFormCss.title}>Register</h3>

                <div className={RegisterFormCss.loginLink}>
                  <p>
                    {" "}
                    Have an Account? <a href="#">Login</a>
                  </p>
                </div>
                <h3 className={RegisterFormCss.persoTitleText}>
                  Personal Details
                </h3>

                <div class="flex">
                  <div className={RegisterFormCss.inputBox}>
                    <span>First Name </span>
                    <input type="text" />
                  </div>
                  <div className={RegisterFormCss.inputBox}>
                    <span>Last Name</span>
                    <input type="text" />
                  </div>
                </div>

                <div className={RegisterFormCss.inputBox}>
                  <span>User Name</span>
                  <input type="text" />
                </div>
                <div className={RegisterFormCss.inputBox}>
                  <span>Email </span>
                  <input type="email" />
                </div>
                <div className={RegisterFormCss.inputBox}>
                  <span>Phone Number </span>
                  <input type="text" />
                </div>
              </div>

              <div className={RegisterFormCss.vl}></div>

              <div className={RegisterFormCss.col}>
                <h3 className={RegisterFormCss.titlePass}>Password</h3>
                <div className={RegisterFormCss.inputBox}>
                  <span>Password </span>
                  <input type="pass" />
                </div>
                <div className={RegisterFormCss.inputBox}>
                  <span>Confirm Password</span>
                  <input type="pass" />
                </div>
                <p className={RegisterFormCss.twoFactText}>
                  Two Factor autentication
                  <div className={RegisterFormCss.checkboxdiv}>
                    <label className={RegisterFormCss.switch}>
                      <input type="checkbox" />
                      <span
                        className={`${RegisterFormCss.slider} ${RegisterFormCss.round}`}
                      ></span>
                    </label>
                  </div>
                </p>
                <input
                  type="submit"
                  value="Create Account"
                  className={RegisterFormCss.submitBtn}
                />

                <p className={RegisterFormCss.orContText}>
                  Or continue with the following options
                </p>

                <div className={RegisterFormCss.sociaMediaIcon}>
                  <ul>
                    <li>
                      <i class="fa fa-facebook-f"></i>
                    </li>
                    <li>
                      {" "}
                      <i className=" fa fa-google" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i className="fa fa-apple" aria-hidden="true"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationFormBody;
