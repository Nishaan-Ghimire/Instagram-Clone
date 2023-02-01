import React from 'react';
import './loginForm.scss';
const LoginForm = () => {
  return (
    <div className='loginForm'>
      <div className="formpart">
      <div className="logoContainer">
        <img className='logo' src='/assets/logo1.png'/>
      </div>
      <form action="#">
        <input type="text" placeholder='Phone number, username or email' />
        <input type="password" placeholder='Password' />
        <button type="submit">Login</button>
      </form>
      <div className="_or">
        <span>OR</span>
      </div>
      <div className="facebookLogin">
      <img src="/assets/facebook.png" alt="facebook logo" /> <span> Log in with Facebook</span>
      </div>
      <div className="forgetPass">
        <span>Forget password?</span>
      </div>
      </div>
    <div className="signupPart">
      Don't have account? <a href="#">Signup</a>
    </div>

    </div>
  )
}

export default LoginForm
