import React from 'react'
import './TwoFactorVerificationSecound.css'
const TwoFactorVerificationSecound = () => {
  return (
    <div class="container">

    <form className='' action="">
        <div className="form-ver">

        

    
        <div class="row">
    
            <div class="col">
                <div className="title">
                <h3 class="tow-title">Two Factor Verification</h3>
                </div>
                
    
                <div class="veryfy-title">
             <p>Verify the really you trying to sign in 
abc12345tyua@gmail.com    </p>
          </div>
               
                    <div className="get-veryfy">

                    <p >Get verification code from  077****123</p>
                    </div>


                    <p className='enter-code-title'>Enter the code</p>

                    <div class="userInput">
			<input type="text" id='ist' maxlength="1" onkeyup="clickEvent(this,'sec')"/>
			<input type="text" id="sec" maxlength="1" onkeyup="clickEvent(this,'third')"/>
			<input type="text" id="third" maxlength="1" onkeyup="clickEvent(this,'fourth')"/>
			<input type="text" id="fourth" maxlength="1" onkeyup="clickEvent(this,'fifth')"/>
			<input type="text" id="fifth" maxlength="1"/>
		</div>

        <div className="try-anoth-text">

                    <p class="alignleft" >Try another way</p>
                    <p class="alignright">Try another way</p>
                    </div>
                


                
                <input type="submit" value="Next" class="submit-btn-next"/>
    
               
                
                 </div>
    
                 
    
                  </div>
                  </div>
    </form>
    
    </div>
  )
}

export default TwoFactorVerificationSecound