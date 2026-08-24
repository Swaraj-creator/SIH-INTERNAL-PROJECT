import React, { useState } from 'react'
import Register from './auth/register'
import Login from './auth/login'

const SignUser = () => {
    const [registered, setRegister] = useState(false);
    return (
        <div className="mainSignBox">
            <div className="descriptionBox">

            </div>
            <div className="signBox">
                {registered ? (<Login></Login>) : (<Register></Register>)}
            </div>
        </div>
    )
}

export default SignUser
