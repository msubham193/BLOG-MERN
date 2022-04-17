import React from 'react'
import './Register.css'
const Register = () => {
  return (
    <div className="register">

    <span className="registerTitle">Create Account</span>


  <form action="" className="registerForm">

  <label>User Name</label>
    <input type="text"  className="registerInput" placeholder="Enter your username..." />

    <label>Email</label>
    <input type="text"  className="registerInput" placeholder="Enter your email..." />
    <label >Password</label>
    <input type="text" className="registerInput" placeholder="Enter your password..." />
   <button className="registerButton">Sign Up</button>


  </form>
  
  <button className="registerLoginBtn">Login</button>
   

</div>
  )
}

export default Register