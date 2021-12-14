import React from 'react'
import { HomeScreen } from '../components/home/HomeScreen'

export const AppRouter = () => {
    return (
        <>
            <Navbar />

            <div className='container'>

                <Routes>

                    <Route path="/" element={<HomeScreen />} />
                    <Route path="login" element={<LoginScreen />} />
                    <Route path="proyect" element={<ProyectScreen />} />
                    <Route path="user" element={<UserScreen />} />
                    <Route path="task" element={<TaskScreen />} />



                </Routes>

            </div>

        </>
    )
}
