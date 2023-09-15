import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Register from './Register/Register'
import Login from './Login/Login'
import { useSelector } from 'react-redux'
import AccountData from './AccountData/AccountData'

const Account = () => {
    const user = useSelector((state) => state.user);

    return (
        <>
            <Routes>
                {!user ?
                    <>
                        <Route path='/register' element={<Register />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/accountData' element={<Navigate to='/account/login' />} />
                    </>
                    :
                    <>
                        <Route path='/register' element={<Navigate to='/' />} />
                        <Route path='/login' element={<Navigate to='/' />} />
                        <Route path='/accountData' element={<AccountData />} />
                    </>
                }
            </Routes>
        </>
    )
}

export default Account