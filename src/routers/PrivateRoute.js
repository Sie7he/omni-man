import React from 'react'
import { Navigate } from 'react-router'

export const PrivateRoute = ({ children}) => {

    const user = localStorage.getItem('usuario')
    return user ? children : <Navigate to="login" />
}
