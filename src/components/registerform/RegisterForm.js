import React from 'react';
import './registerForm.scss';


const RegisterForm = () => {
  return (
    <div className='registerForm'>
      <div className="formpart">
      <div className="logoContainer">
        <img className='logo' src='/assets/logo1.png'/>
      </div>
        <div className="text">
            <h4>Sign up to see photos and <br/> videos from your friends.</h4>
        </div>
        <div className="loginWithFacebook">
        <img src="/assets/facebook.png" alt="" /> <span> Login with facebook </span></div>
        <div className="_or">
        <span>OR</span>
      </div>
     
      <form action="#">
        <input type="text" placeholder='Mobile number or email' />
        <input type="text" placeholder='Full name' />
        <input type="text" placeholder='Username' />
        <input type="password" placeholder='Password' />
        <div className="mywords">
        <span>
       This is an instagram clone made by @nishan as part <br/> of project with instagram basic functionality
        </span>

        </div>
        <button type="submit">Signup</button>
      </form>

      </div>
    <div className="loginPart">
    Have an account? <a href="#">Login</a>
    </div>

    </div>
  )
}

export default RegisterForm
