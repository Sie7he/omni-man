import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import './login.css';


export const LoginScreen = ( {} ) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const [error, setError] = useState('');
    const navigate = useNavigate();


    async function login() {

       
        
        let item = {email,password};
        let result = await fetch(process.env.REACT_APP_API + "/Usuario/Login/loginUsuario",{
            method:"POST",
            body:JSON.stringify(item)
        });
        
        
        result = await result.json();
        const {correcto, mensaje, usuario} = result;

        if(!correcto){
            alert(mensaje);
            
        }else if(usuario.perfil_id==1){
            localStorage.setItem('usuario', usuario.nombres);
            localStorage.setItem('admin', usuario.id_perfil);
           navigate('/user');

        }else if(usuario.perfil_id==2){
           localStorage.setItem('usuario', usuario.nombres);
           navigate('/');
        
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
        <div className="color"></div>
        <div className="color"></div>
        <div className="color"></div>
        <div className="box">
            <div className="square" style={{'--i':1}} ></div>
            <div className="square" style={{'--i':2}}></div>
            <div className="square" style={{'--i':3}}></div>
            <div className="square" style={{'--i':4}}></div>
            <div className="square" style={{'--i':5}}></div>
            <div className="contenedor-login">
                <div className="form">
                    <h2>Inicia Sesi??n</h2>
                    
                        <div className="inputBox">
                            <input 
                                type="text"
                                name="email" 
                                placeholder="Ingresa tu correo" 
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="inputBox">
                            <input 
                                type="password" 
                                name="password"
                                placeholder="Ingresa tu contrase??a" 
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="inputBox">
                            <button
                                onClick={login}
                                className='btn-login'
                            > 
                                Login
                            </button>
                        </div>
                        <p class="forget">??Olvidaste tu contrase??a? <NavLink to="#">Click aqu??</NavLink></p>
                    
                </div>
            </div>
        </div>
    </section>
    </div>
    )
}
