import React, { useState, useRef } from 'react'
import './login-form.css'
import { z } from 'zod'

//Função que retorna o formulário de login, autenticação e loader
function LoginForm({setLoading}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const res = useRef()

// => Função que valida o usuário
    function autenticateUser(email, password) {
             return (email === 'gabriel@gmail.com') && (password === 'gabi3110')
            
        }

// => Função que envia o formulário
    async function handleSubmit(e) {
        e.preventDefault()

            const email_schema = z.string().email().safeParse(email)
            const pass_schema = z.string().min(8).safeParse(password)

            if (email_schema.success && pass_schema.success) {
                if (autenticateUser(email, password)) {
                    setLoading(true)
                } else {
                    res.current.innerText = 'Invalid email or pass!'
                }
            } else {
                res.current.innerText = 'Invalid form!'
            }

        


    }

// => Retorno do formulário ou loader
    return  (
        <div className="login-box">
            <h2>Login to Maestro</h2>
            <form onSubmit={handleSubmit}>
                <div className="user-box">
                    <input 
                        type="text"
                        required autoComplete='off'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <label>Email</label>
                </div>
                <div className="user-box">
                    <input 
                        type="password"
                        required autoComplete='off'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <label>Password</label>
                </div>
                <div className="buttons">
                    <button type='submit'>
                        Log In
                    </button>
                </div>
                <div className="change">
                    <p>No account ? <a href="#" className="changeButton">Sign Up</a></p>
                </div>
                <div className="logResponse" ref={res}></div>
            </form>
        </div>
    )
}

export default LoginForm