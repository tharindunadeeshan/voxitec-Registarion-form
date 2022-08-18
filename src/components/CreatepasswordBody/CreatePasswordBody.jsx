import React from 'react'
import CreatePassBodycss from'./CreatePasswordBody.module.css'

export const CreatePasswordBody = () => {
  return (
    <div className={CreatePassBodycss.container}>

    <form className='' action="">
        <div className="form-ver">

        

    
        <div class="row">
    
            <div class="col">
                <div className={CreatePassBodycss.title}>
                <h3 >Create New Password</h3>
                </div>
                
    
                <div className={CreatePassBodycss.setPassTitle}>
             <p> Set your new password  </p>
          </div>
          <div className={CreatePassBodycss.inputBox}>
                <span>New Password</span>
                <input className={CreatePassBodycss.newnput} type="text"/>
            </div>
            <div className={CreatePassBodycss.inputBox}>
                <span>Confirm Password</span>
                <input className={CreatePassBodycss.newnput} type="text"/>
            </div>
                
                
                <input type="submit" value="Set New Password" className={CreatePassBodycss.submitBtn}/>
       
                
                 </div>
    

                  </div>
                  </div>
    </form>
    
    </div>
  )
}
