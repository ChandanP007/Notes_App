import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useSignup from '../../../hooks/useSignup'

const SignUp = () => {
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { signup } = useSignup()

    const handleInput = async (e) => {
        e.preventDefault()
        await signup({ fullname, email, password })
    }
    return (
        <>
            <form onSubmit={handleInput}>
                <h2>SignUp</h2>
                <div>
                    <input type="text"
                        placeholder='Fullname'
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)} />
                </div>

                <div>
                    <input type="email"
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                    <input type="password"
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>

                <p>Already have an account ?
                    <Link to="/api/login">Login</Link>
                </p>
            </form>
        </>
    )
}

export default SignUp
