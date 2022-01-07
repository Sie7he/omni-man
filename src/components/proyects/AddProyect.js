import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import '../users/users.css';

export const AddProyect = () => {


    const navigate = useNavigate();
    const [nombre, setNombre] = useState('');
    const [inicio, setInicio] = useState('');
    const [colaborador, setColaborador] = useState([]);
    const [jp, setJp] = useState('');


    const getColaborador = async () => {
        const url = process.env.REACT_APP_API + '/Administracion/Usuarios/getColaboradores';
        const resp = await fetch(url);
        const data = await resp.json();
        setColaborador(data);

    }

    getColaborador();

    async function addProyect() {
        let item = { nombre, jp, inicio };
        let result = await fetch(process.env.REACT_APP_API + '/Administracion/Proyectos/save', {
            method: "POST",
            body: JSON.stringify(item)
        });
        console.log(item)
        result = await result.json();
        const { correcto, mensaje } = result;

        if (!correcto) {
            alert(mensaje);
        } else {
            navigate('/proyect')
        }
    }


    return (
        <section>
            <div className='box'>
            <div className='contenedor-login'>
                <div className='form'>
                    <h2>Guardar Proyecto</h2>
                    <div className='inputBox'>
                        <input
                            type='text'
                            name='nombre'
                            placeholder='Nombre Proyecto'
                            onChange={(e) => setNombre(e.target.value)}

                        />
                    </div>

                    <div className='inputBox'>
                        <select onChange={(e) => setJp(e.target.value)}>
                            <option >Elegir Colaborador...</option>
                            {colaborador.map((cb) => (
                                <option value={cb.id}>{cb.nombres}</option>
                            ))}
                        </select>
                    </div>

                    <div className='inputBox'>
                        <input
                            type='date'
                            name='inicio'
                            onChange={(e) => setInicio(e.target.value)}

                        />
                    </div>

                    <div className='inputBox'>
                        <button
                            onClick={addProyect}
                            className='btn-login'
                        >
                            Guardar
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}
