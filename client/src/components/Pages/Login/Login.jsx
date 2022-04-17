import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className="login">

        <span className="loginTitle">Login</span>


      <form action="" className="loginForm">

        <label>Email</label>
        <input type="text"  className="loginInput" placeholder="Enter your email..." />
        <label >Password</label>
        <input type="text" className="loginInput" placeholder="Enter your password..." />
       <button className="loginButton">Login</button>


      </form>
      
      <button className="loginRegisterBtn">Register</button>
       

    </div>
  )
}

export default Login