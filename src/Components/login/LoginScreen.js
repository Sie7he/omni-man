import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {Input} from './input/Input';
import './login.css';


export const LoginScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            navigate.push("/user")
        }

    }, []);

     const  login = async () => {

        let item = { email, password };
        let result = await fetch("http://localhost/omicron/api/index.php/Administracion/Usuarios/get", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result));
        navigate.push("/user");

    }

    const handleChange = (name,value) => {

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
    }

    return (


        <div className="container">
            <div className='center'>

                <Input
                    attribute={{
                        id: 'email',
                        name: 'email',
                        placeholder: 'Ingrese su correo',
                        type: 'text'
                    }}
                    handleChange={handleChange}

                />

                <Input
                    attribute={{
                        id: 'pass',
                        name: 'pass',
                        placeholder: 'Ingrese su contraseña',
                        type: 'password'
                    }}
                    handleChange={handleChange}
                    param={passwordError}
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
