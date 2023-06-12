import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContexxx } from '../context/AuthContext'

const PrivateRouter = () => {
    const {currentUser} = useContext(AuthContexxx)
  return  currentUser ? <Outlet/> : <Navigate to="/login"/>

}

export default PrivateRouter