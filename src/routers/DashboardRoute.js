import React from 'react'
import { Routes, Route } from 'react-router'
import { HomeScreen } from '../components/home/HomeScreen'
import { AddProyect } from '../components/proyects/AddProyect'
import { ProyectScreen } from '../components/proyects/ProyectScreen'
import { TaskScreen } from '../components/tasks/TaskScreen'
import { Navbar } from '../components/ui/Navbar'
import { AddUser } from '../components/users/AddUser'
import { UserScreen } from '../components/users/UserScreen'
import { AuthRoute } from './AuthRoute'

export const DashboardRoute = () => {
    return (
        <div>
            <Navbar />

            <Routes>
                <Route path="proyect" element={
                <AuthRoute>
                    <ProyectScreen />
                </AuthRoute>
            
            } />
                <Route path="user" element={
                    <AuthRoute>
                        <UserScreen />
                    </AuthRoute>
                } />
                <Route path="task" element={
                    <AuthRoute>
                        <TaskScreen />
                    </AuthRoute>
                } />
                <Route path="addUser" element={
                    <AuthRoute>
                        <AddUser />
                    </AuthRoute>
                } />
                 <Route path="addProyect" element={
                    <AuthRoute>
                        <AddProyect />
                    </AuthRoute>
                } />

                <Route path="/" element={<HomeScreen />} />
            </Routes>

        </div>
    )
}
