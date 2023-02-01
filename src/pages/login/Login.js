import React from 'react'
import './login.scss';
import LoginForm from '../../components/loginform/LoginForm'
const Login = () => {
  return (
    <div className='loginPage'>
      <div className="left">
       <img src="/assets/login.png" alt="" />
      </div>
      <div className="right">
        <LoginForm/>
      </div>
    </div>
  )
}

export default Login
