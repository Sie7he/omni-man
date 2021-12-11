import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

export const LoginScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem('user-info')) {
            navigate.push("/user")
        }
        
    }, []);

    async function login() {
        
        let item = {email,password};
        let _form = new FormData();
        _form.append('email', email);
        _form.append('password',password)
        console.log(_form);
        let result = await fetch(process.env.REACT_APP_API + "/Usuario/Login/loginUsuario",{
            method:'POST',
            mode:'no-cors',
            headers:{
                /* "Content-Type":"application/json", */
                /* "Accept":"application/json", */
                /* "Origin":"*" */
            },
            body:_form
        });
        console.log(result);
        result= await result.json();
        localStorage.setItem("user-info",JSON.stringify(result));
        navigate.push("/user");

    }


    return (


        <div className="container">
            <div className='center'>

                <div className='mb-3'>
                    <input
                        type="text"
                        className="form-control"
                        name="email"
                        placeholder="login"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className='mb-3'>
                    <input 
                        type="password" 
                        className="form-control" 
                        name="pass" 
                        placeholder="password" 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>

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
