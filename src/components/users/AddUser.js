import React, { useState } from 'react'
import AsyncSelect from 'react-select/async';
import { useNavigate } from 'react-router-dom';


export const AddUser = () => {

    const [nombres, setNombre] = useState('');
    const [apellidos, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [perfil, setValue] = useState('');
    const [telefono, setTelefono] = useState('');
    const [selectedValue, setSelectedValue] = useState(null);
    const navigate = useNavigate();

    const handleInputChange = value =>{
        setValue(value || null)
    }

    const handleChange = value => {
        setSelectedValue(value || null)
    }

    const getPerfil = async () => {
        const url = process.env.REACT_APP_API + '/Usuario/Perfiles/get'
        const resp = await fetch(url);
        const data = await resp.json();
        return data;
    }

    async function addUser() {
        let hola = 1
        let item = { nombres, apellidos, email, hola };
        let result = await fetch(process.env.REACT_APP_API + "Administracion/Usuarios/save", {
            method:"POST",
            body:JSON.stringify(item)
        });

        result = await result.json();
        if(!result.correcto){
            console.log(result.mensaje)
        } else{
           navigate('/user');
        
        }
    }

    return (
        <div>
         
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
           <AsyncSelect 
        cacheOptions
        defaultOptions
        value={selectedValue}
        getOptionLabel={e => e.nombre}
        getOptionValue={e => e.id}
        loadOptions={getPerfil}
        onInputChange={handleInputChange}
        onChange={handleChange}
       
       
       />
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
