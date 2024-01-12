import React from "react";
import "./CSS/LoginSignUp.css"

const LoginSignUp = () => {
    return (
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-fields">
                    <input type='text' placeholder="Your name" />
                    <input type='email' placeholder="Email Adress " />
                    <input type='password' placeholder="Choose a password" />
                </div>
                <button> Continue</button>
                <p className="loginsignup-login"> Already have an account <span>Login here!</span> </p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id="" />
                    <p> By contiuing, I agree to the terms of use & privacy policy</p>

                </div>
            </div>
        </div>

    )
}

export default LoginSignUp