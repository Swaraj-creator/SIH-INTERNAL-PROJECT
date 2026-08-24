import React from 'react'
import "../../styles/register.css"

const Register = () => {
  return (
    <div className="registerForm">
        <h2>LOGIN</h2>
        <div className="inputBoxes">
            <label htmlFor="userId"></label>
            <input type="text" name="userId" id="userId" />
        </div>
        <div className="inputBoxes">
            <label htmlFor="password"></label>
            <input type="text" name="password" id="password" />
        </div>
    </div>
  )
}

export default Register
