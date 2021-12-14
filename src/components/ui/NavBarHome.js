import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavBarHome = () => {
    return (
        <div className="navbar navbar-expand-lg navbar-light bg-light">
           <div className='container'>
           <Link 
                className="navbar-brand"
                to="/"
            >
                Omicron
            </Link>

         
               </div> 
           
        </div>
    )
}
