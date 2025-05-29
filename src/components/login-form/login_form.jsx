import React, { useState } from 'react'
import './login-form.css'

function LoginForm() {
    return (
        <div className="login-box">
            <h2>Login</h2>
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
                    <label>Senha</label>
                </div>
                <div className="buttons">
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Entrar
                    </a>
                </div>
                <div className="change">
                    <p>Não tem conta ? <a href="#" className="changeButton">Crie uma conta</a></p>
                </div>
                <div className="logResponse"></div>
            </form>
        </div>
    )
}

export default LoginForm