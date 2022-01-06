import React from 'react'
import { Navigate } from 'react-router'

export const AuthRoute = ({ children }) => {

    const user = localStorage.getItem('admin')
    return user ? children : <Navigate to="/" />
}
