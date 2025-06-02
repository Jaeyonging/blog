import React, { useState } from 'react'
import LoginButton from '../component/Login/LoginButton'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className="flex h-[calc(100vh-60px-60px)] items-center justify-center bg-gradient-to-br px-4">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-[400px] flex flex-col gap-5 text-gray-800">
                <h2 className="text-2xl font-bold text-gray-800 text-center">Login to Your Account</h2>
                <input
                    type="email"
                    placeholder="Email"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <LoginButton email={email} password={password} />
            </div>
        </div>
    )
}

export default Login
