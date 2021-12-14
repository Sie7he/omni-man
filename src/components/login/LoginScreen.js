import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//import {Input} from './input/Input';
import './login.css';


export const LoginScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const navigate = useNavigate();

    /*useEffect(() => {
        if (localStorage.getItem('user-info')) {
            navigate("/user")
        }

    }, []);*/

    async function login() {
        
        let item = {email,password};
       /* let _form = new FormData();
        _form.append('email', email);
        _form.append('pass',password)*/
        console.log(email, " ", password);
        console.log(process.env.REACT_APP_API);
        let result = await fetch(process.env.REACT_APP_API + "/Usuario/Login/loginUsuario",{
            method:'POST',
            mode:'no-cors',
            headers:{
                 "Content-Type":"application/json", 
                 "Accept":"application/json", 
                 
            },
            body: JSON.stringify(item)
        });
        result= await result.text();
        console.log(result);
        localStorage.setItem("user-info",JSON.stringify(result));
        
        navigate("/user");

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


        <div className="container">
            <div className='center'>

               <input 
                    type='text'
                    name='email'
                    placeholder='Ingrese su correo'
                    className='form-control'
                    onChange={(e)=> setEmail(e.target.value)}
               />

                <input 
                    type='password'
                    name='pass'
                    placeholder='Ingrese su correo'
                    className='form-control'
                    onChange={(e)=> setPassword(e.target.value)}
               />

                <div className='mb-3'>
                    <button
                        onClick={login}
                        className='btn btn-primary'
                    >
                        Login
                    </button>
                </div>

            </div>
        </div>
    )
}
