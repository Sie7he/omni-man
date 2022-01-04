import React from 'react'
import { Navigate } from 'react-router'

export const PublicRoute = ({ children}) => {

    const user = localStorage.getItem('usuario')
    return user ? <Navigate to="/" /> : children
}
