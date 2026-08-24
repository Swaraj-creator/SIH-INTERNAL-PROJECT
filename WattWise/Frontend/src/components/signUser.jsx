import React, { useState } from 'react'
import Register from './auth/register'
import Login from './auth/login'
import "../../src/styles/signPage.css"
import logoFull from "../assets/logos/logo_Complete2_tr.png"

const SignUser = () => {
    const [registered, setRegister] = useState(false);
    return (
        <div className="mainSignBox">
            <div className="descriptionBox">
                <div className="logo">
                    <img src={logoFull} alt="" />
                </div>
            </div>
            <div className="signBox">
                {registered ? (<Login></Login>) : (<Register></Register>)}
            </div>
        </div>
    )
}

export default SignUser
