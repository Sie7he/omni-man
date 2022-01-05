import React from 'react'
import { Routes, Route } from 'react-router'
import { HomeScreen } from '../components/home/HomeScreen'
import { ProyectScreen } from '../components/proyects/ProyectScreen'
import { TaskScreen } from '../components/tasks/TaskScreen'
import { Navbar } from '../components/ui/Navbar'
import { AddUser } from '../components/users/AddUser'
import { UserScreen } from '../components/users/UserScreen'

export const DashboardRoute = () => {
    return (
        <div>
            <Navbar />
            
            <Routes>
            <Route path="proyect" element= { <ProyectScreen />} />
            <Route path="user" element= { <UserScreen />} />
            <Route path="task" element= { <TaskScreen />} />
            <Route path="/" element= { <HomeScreen />} />
            <Route path="addUser" element={ <AddUser />} />
            </Routes>
            
        </div>
    )
}
