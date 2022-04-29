import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { username } from '../redux/action'

const Register = () => {
    const [detail, setDetail] = useState('')
    const [checkUsername, setcheckUsername] = useState(false)
    const dispatch = useDispatch()

    function handleSubmit(e) {
        setDetail(e.target.value)
        setcheckUsername(false)
    }

    function handleLogin() {
        if (!detail) {
            setcheckUsername(true)
        } else {
            dispatch(username(detail))
        }

    }

    return (
        <div className='flex flex-col items-center justify-center min-h-screen gap-5'>
            <input
                type="text"
                className='p-2 border-2 border-slate-600 pl-4 px-10'
                placeholder='Enter your name to login' value={detail}
                onChange={handleSubmit}
                autoComplete="false"
            />
            <button className='bg-orange-600 rounded-lg p-3 text-white px-10' onClick={() => handleLogin()}>Login</button>
            {checkUsername && <p className='text-red-600 font-bold w-60 text-center'>No Username Selected, please select one to continue</p>}
        </div>
    )
}

export default Register