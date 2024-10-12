import React from 'react'

function login () {
  return (
    <>
    <div class="wrapper">
      <form action="">
        <h1>WELCOME</h1>
        <div class="input-box">
          <input type="text" placeholder='Username'required/>

        </div>
        <div class="input-box">
          <input type="password" placeholder='password'required/>
          </div>
          
         <button type='submit' className='btn'>LOGİN</button>
     <div></div>
        
      </form>
    </div>
    
    </>
  )
}

export default login