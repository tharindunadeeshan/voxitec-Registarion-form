import React from 'react'
import FrogetPassCss from './FrogotPasswordBody.module.css'

const FrogotPasswordBody = () => {
  return (
    <div className={FrogetPassCss.container}>

<form action="">

    <div className={FrogetPassCss.row}>

        <div className={FrogetPassCss.col}>

            <h3 className={FrogetPassCss.title}>Frogot Password</h3>

      <p className={FrogetPassCss.sendVerTitle}>Send the verification code </p>

      <input className={FrogetPassCss.checkBoxss} type="checkbox" value="Bike"/>
  <label className={FrogetPassCss.UserIntText} for="vehicle1">Phone number 077 *** 1234</label><br/>


  <div className={FrogetPassCss.checkclass}> 
  <input className='hi' type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
  <label className={FrogetPassCss.UserIntText}  for="vehicle3"> Email address abc@gmail.com</label><br/><br/>
  </div>
 



  <input type="submit" value="Send Verfication Code" className={FrogetPassCss.submitBtn}/>
            
           
            
             </div>

             <div className={FrogetPassCss.vl}></div>

        <div className={FrogetPassCss.col}>

           
        <h3 className={FrogetPassCss.titleTime}>00 : 02</h3>
        
          
            <p className={FrogetPassCss.plsText}>Please enter the 5 digit verification code 
sent to 077 *** 1234 or abc@gamil.com
            </p>
            <p className={FrogetPassCss.enterCodeText}>Enter the code</p>
            


            <div className={FrogetPassCss.userInput}>
			<input className={FrogetPassCss.cvvinputs} type="text" id='ist' maxlength="1" onkeyup="clickEvent(this,'sec')"/>
			<input className={FrogetPassCss.cvvinputs} type="text" id="sec" maxlength="1" onkeyup="clickEvent(this,'third')"/>
			<input  className={FrogetPassCss.cvvinputs} type="text" id="third" maxlength="1" onkeyup="clickEvent(this,'fourth')"/>
			<input className={FrogetPassCss.cvvinputs} type="text" id="fourth" maxlength="1" onkeyup="clickEvent(this,'fifth')"/>
			<input className={FrogetPassCss.cvvinputs}  type="text" id="fifth" maxlength="1"/>
		</div>


            <p className={FrogetPassCss.orContText}>Invalid OTP code</p>
          

            <input type="submit" value="Create New Password" className={FrogetPassCss.submitBtn}/>
           
             </div>
              </div>
</form>

</div> 
  )
}

export default FrogotPasswordBody