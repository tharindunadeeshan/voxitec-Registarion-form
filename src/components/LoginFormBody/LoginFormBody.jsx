import React from "react";
import LoginBodyCss from "./LoginFormBody.module.css";
import image1 from "../../images/bg.png";

const LoginFormBody = () => {
  return (
    <div className={LoginBodyCss.BackgroundImagecontainer}>
      <img src={image1} alt="" />
      <div className={LoginBodyCss.Loging_body_contariner}>
        <div className={LoginBodyCss.container}>
          <form action="">
            <div className={LoginBodyCss.row}>
              <div className={LoginBodyCss.col}>
                <h3 className={LoginBodyCss.title}>Login</h3>

                <div className={LoginBodyCss.LoginLink}>
                  <p>
                    {" "}
                    Haven’t access to login ? <a href="#">Sign Up</a>
                  </p>
                </div>
                <div className={LoginBodyCss.inputBox}>
                  <span>Email address</span>
                  <input type="text" />
                </div>
                <div className={LoginBodyCss.inputBox}>
                  <span>Password </span>
                  <input type="email" />
                </div>

                <p className={LoginBodyCss.forgetPass}>Froget Password ?</p>
                <input
                  type="submit"
                  value="Create Account"
                  className={LoginBodyCss.submitBtns}
                />
              </div>

              <div className={LoginBodyCss.vl}></div>

              <div className={LoginBodyCss.col}>
                <p className={LoginBodyCss.orContText}>
                  Or continue with the following options
                </p>

                <div className={LoginBodyCss.SocialMediaIcon}>
                  <ul>
                    <li>
                      <i class="fa fa-facebook-f"></i>
                    </li>
                    <li>
                      {" "}
                      <i class="fa fa-google" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i class="fa fa-apple" aria-hidden="true"></i>
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

export default LoginFormBody;
