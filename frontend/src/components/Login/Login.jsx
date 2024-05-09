import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../../hooks/useLogin'


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { login } = useLogin()
    const handleInput = async (e) => {
        e.preventDefault()
        await login(email, password)

    }

    return (
        <>
            <div>
                <form onSubmit={handleInput}>
                    <h2>Login</h2>
                    <input type="email" placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />

                    <input type="password" placeholder='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />

                    <button>Login</button>
                    <p>
                        Not registered yet?
                        <Link to="/api/create-account">Sign Up</Link>
                    </p>

                </form>
            </div>

        </>
    )
}

export default Login
