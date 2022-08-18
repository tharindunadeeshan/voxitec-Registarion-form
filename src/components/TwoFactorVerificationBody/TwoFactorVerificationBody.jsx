import React from 'react'
import Towfactorcss from './TwoFactorVerificationBody.module.css'

const TwoFactorVerificationBody = () => {
  return (
    <div className={Towfactorcss.container}>

    <form className='' action="">
        <div className="form-ver">

        

    
        <div class="row">
    
            <div class="col">
                <div className={Towfactorcss.title}>
                <h3 className={Towfactorcss.towTitle}>Two Factor Verification</h3>
                </div>
                
    
                <div class={Towfactorcss.veryfyTitle}>
             <p> Verify the really you trying to sign in abc@gmail.com   </p>
          </div>
               
                    <div className={Towfactorcss.getVeryfy}>

                    <p >Get verification code from  077****123</p>
                    </div>


                    <p className={Towfactorcss.enterCodeTitle}>Enter the code</p>

                    <div className={Towfactorcss.userInput}>
			<input className={Towfactorcss.userInput1} type="text" id='ist' maxlength="1" onkeyup="clickEvent(this,'sec')"/>
			<input className={Towfactorcss.userInput1}type="text" id="sec" maxlength="1" onkeyup="clickEvent(this,'third')"/>
			<input className={Towfactorcss.userInput1} type="text" id="third" maxlength="1" onkeyup="clickEvent(this,'fourth')"/>
			<input className={Towfactorcss.userInput1}type="text" id="fourth" maxlength="1" onkeyup="clickEvent(this,'fifth')"/>
			<input  className={Towfactorcss.userInput1}type="text" id="fifth" maxlength="1"/>
		</div>

        <div className={Towfactorcss.TryAnothText}>

                    <p class="alignleft" >Try another way</p>
                    <p class="alignright">Resend Code</p>
                    </div>
                


                
                <input type="submit" value="Next" className={Towfactorcss.submitbtnnext}/>
    
               
                
                 </div>
    
                 
    
                  </div>
                  </div>
    </form>
    
    </div> 
  )
}

export default TwoFactorVerificationBody