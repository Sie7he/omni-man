import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {



    const navigate = useNavigate();
    const adm = localStorage.getItem('admin');
    const handleLogout = () => {
        localStorage.clear();
        navigate('/login')
    }


    if(adm) {
        return (
            <div className="navbar navbar-expand-lg navbar-light bg-light">
               <div className='container'>
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
                    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                    <ul className="navbar-nav ml-auto">
                       
                        
                        <button 
                            className="nav-item nav-link btn" 
                            onClick={ handleLogout }
                        >
                            Logout
                        </button>
                    </ul>
                </div>
                   </div> 
               
            </div>
        )
    } else {
        return (
            <div className="navbar navbar-expand-lg navbar-light bg-light">
            <div className='container'>
            <Link 
                 className="navbar-brand"
                 to="/"
             >
                 Omicron
             </Link>
             <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                    <ul className="navbar-nav ml-auto">
                       
                        
                        <button 
                            className="nav-item nav-link btn" 
                            onClick={ handleLogout }
                        >
                            Logout
                        </button>
                    </ul>
                </div>
             </div>
             </div>
        )
    }
        
    
   
}
