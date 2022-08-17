import React from 'react'
import './RegistrationFormBody.css'
import 'font-awesome/css/font-awesome.min.css';

import '@fortawesome/fontawesome-svg-core/styles.css'


const RegistrationFormBody = () => {
  return (
    
<div class="container">

<form action="">

    <div class="row">

        <div class="col">

            <h3 class="title">Register</h3>

            <div class="Login-link">
         <p> Have an Account? <a href="#">Login</a></p>
      </div>
      <h3 className='perso-title-text'>Personal Details</h3>

            <div class="flex">
                <div class="inputBox">
                    <span>First Name </span>
                    <input type="text" />
                </div>
                <div class="inputBox">
                    <span>Last Name</span>
                    <input type="text" />
                </div>
            </div>


            <div class="inputBox">
                <span>User Name</span>
                <input type="text"/>
            </div>
            <div class="inputBox">
                <span>Email  </span>
                <input type="email" />
            </div>
            <div class="inputBox">
                <span>Phone Number </span>
                <input type="text"/>
            </div>
            
             </div>

             <div class="vl"></div>

        <div class="col">

           
        <h3 className='title-pass'>Password</h3>
        <div class="inputBox">
                <span>Password </span>
                <input type="pass"/>
            </div>
            <div class="inputBox">
                <span>Confirm Password</span>
                <input type="pass" />
            </div>
            <p className='two-fact-text'>Two Factor autentication

            <label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label>
            </p>
            <input type="submit" value="Create Account" class="submit-btn"/>

            <p className='or-cont-text'>Or continue with the following options</p>
          
            <div className="social-media-icon">
      
    <ul>
         <li><i class="fa fa-facebook-f"></i></li>
          <li>  <i class="fa fa-google" aria-hidden="true"></i></li>
         <li><i class="fa fa-apple" aria-hidden="true"></i></li>
      </ul>
    </div>
           
             </div>
              </div>
</form>

</div> 
  )
}

export default RegistrationFormBody