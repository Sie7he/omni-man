import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand"
                to="/"
            >
                Omicron
            </Link>

            
               <div  className="navbar-collapse">
                   <div className="navbar-nav">
                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact
                            to="/login"
                        >
                            Login
                        </NavLink>
                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact
                            to="/user"
                        >
                            Usuario
                        </NavLink>
                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact
                            to="/proyect"
                        >
                            Proyectos
                        </NavLink>
                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact
                            to="/task"
                        >
                            Tareas
                        </NavLink>

                   </div>
                   
                   
                </div> 
         
        </div>
    )
}
