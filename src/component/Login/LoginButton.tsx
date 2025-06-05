import React from 'react'
import { doLogin } from '../../api/user/user'
import { useNavigate } from 'react-router-dom'
import { useAdminStore } from '../../store/data'

interface Props{
    email: string
    password: string
}

const LoginButton = ({email, password}: Props) => {
    const {setAdmin} = useAdminStore()
    const navigate = useNavigate()
    const handleLogin = () => {
        doLogin(email, password).then((res) => {
            if(res.result){
                setAdmin(res.user.id)
                navigate('/admin')
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <button className="mt-2 bg-[#a229a2] text-white py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors" onClick={handleLogin}>
            Login
        </button>
    )
}

export default LoginButton
