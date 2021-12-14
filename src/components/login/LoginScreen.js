import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Navbar } from '../ui/Navbar';
//import {Input} from './input/Input';
import './login.css';


export const LoginScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const navigate = useNavigate();

    /*useEffect(() => {
        if (localStorage.getItem('user-info')) {
            navigate("/user")
        }

    }, []);*/

    async function login() {
        
        let item = {email,password};
        /*let _form = new FormData();
        _form.append('email', email);
        _form.append('pass',password);*/
        let result = await fetch(process.env.REACT_APP_API + "/Usuario/Login/loginUsuario",{
            method:"POST",
        
            body:JSON.stringify(item)
        });
        
        
        result = await result.json();
        console.log(result);
        if(!result.correcto){
            console.log(result.mensaje)
        } else{
            navigate('/user')
        }

    }

    /*const handleChange = (name,value) => {

        if(name === 'email') {
            setEmail(value)
            console.log(email)
            
        } else {
            if(value.length < 6 ){
                setPasswordError(true);
                console.log(password)
            }
            else {
                setPasswordError(false);
                setPassword(password);
        }
    }
    }*/

    return (

       <div>
        <section>
        <div class="color"></div>
        <div class="color"></div>
        <div class="color"></div>
        <div class="box">
            <div class="square" style={{'--i':1}} ></div>
            <div class="square" style={{'--i':2}}></div>
            <div class="square" style={{'--i':3}}></div>
            <div class="square" style={{'--i':4}}></div>
            <div class="square" style={{'--i':5}}></div>
            <div class="contenedor-login">
                <div class="form">
                    <h2>Inicia Sesión</h2>
                    
                        <div class="inputBox">
                            <input 
                                type="text"
                                name="email" 
                                placeholder="Ingresa tu correo" 
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div class="inputBox">
                            <input 
                                type="password" 
                                name="password"
                                placeholder="Ingresa tu contraseña" 
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div class="inputBox">
                            <button
                                onClick={login}
                                className='btn-login'
                            > 
                                Login
                            </button>
                        </div>
                        <p class="forget">¿Olvidaste tu contraseña? <NavLink to="#">Click aquí</NavLink></p>
                        <p class="forget">¿No tienes una cuenta? <a href="#">Regístrate</a></p>
                    
                </div>
            </div>
        </div>
    </section>
    </div>
    )
}
