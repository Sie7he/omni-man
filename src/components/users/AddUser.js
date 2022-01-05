import React, { useState } from 'react'
import AsyncSelect from 'react-select/async';
import { useNavigate } from 'react-router-dom';


export const AddUser = () => {

    const [nombres, setNombre] = useState('');
    const [apellidos, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [value, setValue] = useState([]);
    const [perfil, setPerfil] = useState('');
    const [telefono, setTelefono] = useState('');
    const navigate = useNavigate();

 

    const getPerfil = async () => {
        const url = process.env.REACT_APP_API + '/Usuario/Perfiles/get'
        const resp = await fetch(url);
        const data = await resp.json();
        setValue(data);
    }

    getPerfil();

    async function addUser() {
        let item = { nombres, apellidos, perfil, email, telefono };
        let result = await fetch(process.env.REACT_APP_API + "/Administracion/Usuarios/save", {
            method: "POST",
            body: JSON.stringify(item)
        });
        console.log(item)
        result = await result.json();
        if (!result.correcto) {
            console.log(result.mensaje)
        } else {
            navigate('/user');

        }
    }

    return (
        <div>

            <select onChange={(e) => setPerfil(e.target.value)}>
                    <option >Elegir perfil...</option>
                {value.map((option) => (
                    <option value={option.id}>{option.nombre}</option>
                ))}
            </select>



            <div className='col-md-4'>
                <input
                    type="text"
                    name="nombres"
                    placeholder="Nombre"
                    onChange={(e) => setNombre(e.target.value)}

                />
            </div>
            <div className='col-md-4'>
                <input
                    type="text"
                    name="apellidos"
                    placeholder="Apellido"
                    onChange={(e) => setApellido(e.target.value)}

                />
            </div>
            <div className='col-md-4'>
                <input
                    type="text"
                    name="telefono"
                    placeholder="telefono"
                    onChange={(e) => setTelefono(e.target.value)}

                />
            </div>
            <div className='col-md-4'>
                <input
                    type="email"
                    name="email"
                    placeholder="Correo"
                    onChange={(e) => setEmail(e.target.value)}

                />
            </div>
            <div className='col-md-4'>
            
            </div>
            <div className='col-md-4'>
                <button
                    onClick={addUser}
                >
                    Agregar Usuario
                </button>
            </div>
        </div>
    )
}
