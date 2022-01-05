import React, { useState } from 'react'

export const AddUser = () => {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');
    const [perfil, setPerfil] = useState([]);
   


    const getPerfil = async () =>  {
        const url =  process.env.REACT_APP_API+'/Usuario/Perfiles/get'
        const resp = await fetch(url);
        const data = await resp.json();
        setPerfil(JSON.stringify(data));
        console.log( data)
    }

    async function addUser() {

        let item = {nombre, apellido, correo };
        let result = await fetch(process.env.REACT_APP_API + "/Usuarios/save", {
            method:"POST",
            body:JSON.stringify(item)
        });


    }

    return (
        <div>
            
                <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                   
                />
                <input
                    type="text"
                    name="apellido"
                    placeholder="Apellido"
                   
                />
                <input
                    type="email"
                    name="correo"
                    placeholder="Correo"
                   
                />
               <button
                 onClick={getPerfil}
               >
                   Perfil
               </button>
            
        </div>
    )
}
