import React, { useState } from 'react'
import './login-form.css'

function LoginForm() {
    return (
        <div className="login-box">
            <h2>Login to Maestro</h2>
            <form>
                <div className="user-box">
                    <input 
                        type="text"
                        required autoComplete='off'
                    />
                    <label>Email</label>
                </div>
                <div className="user-box">
                    <input 
                        type="password"
                        required autoComplete='off'
                    />
                    <label>Password</label>
                </div>
                <div className="buttons">
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Log In
                    </a>
                </div>
                <div className="change">
                    <p>No account ? <a href="#" className="changeButton">Sign Up</a></p>
                </div>
                <div className="logResponse"></div>
            </form>
        </div>
    )
}

export default LoginForm