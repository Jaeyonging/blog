import React from 'react'

interface Props{
    email: string
    password: string
}

const LoginButton = ({email, password}: Props) => {
    const handleLogin = () => {
        console.log('login', email, password)
    }

    return (
        <button className="mt-2 bg-[#a229a2] text-white py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors" onClick={handleLogin}>
            Login
        </button>
    )
}

export default LoginButton
