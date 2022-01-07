import React, { useState, useEffect } from 'react'

export const TaskScreen = () => {


    const [hitoData, setHitoData] = useState([]);
    const [hito, setHito] = useState(0);
    const [nombre, setNombre] = useState('');
    const [inicio, setInicio] = useState('');
    const [termino, setTermino] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [proyecto, setProyecto] = useState([]);

    const getProyectos = async () => {
        const url = process.env.REACT_APP_API + '/Administracion/Proyectos/get';
        const resp = await fetch(url);
        const data = await resp.json();
        setProyecto(data);
        console.log(data);
    }

    useEffect(() => {
        getProyectos();
    }, [])

    const handleProyectChange = (value) => {
        


    }

    const getHitoData = async () => {
        const url = process.env.REACT_APP_API + '/Administracion/Proyectos/getHitosProyecto/'+hito;
        const resp = await fetch(url);
        const data = await resp.json();
        setHitoData(data);
        console.log(hito)
    }

    useEffect(() => {
        getHitoData();
    }, [hito])


    const addTask = async () => {

    }


    return (
        <div>
            <section>
                <div className='box'>
                    <div className='contenedor-login'>
                        <div className='form'>
                            <h2>Guardar Tarea</h2>
                            <div className='inputBox'>
                                <input
                                    type='text'
                                    name='nombre'
                                    placeholder='Nombre Tarea'
                                    onChange={(e) => setNombre(e.target.value)}

                                />
                            </div>


                            <div className='inputBox'>
                                <select onChange={(e) => setHito(e.target.value)}>
                                    <option >Elegir Proyecto...</option>
                                    {proyecto.map((pro) => (
                                        <option value={pro.id}>{pro.nombre}</option>
                                    ))}
                                </select>
                            </div>

                            <div className='inputBox'>
                                <select onChange={(e) => setHitoData(e.target.value)}>
                                    <option >Elegir Hito...</option>
                                    {hitoData.map((cb) => (
                                        <option value={cb.id}>{cb.nombre}</option>
                                    ))}
                                </select>
                            </div>



                            <div className='inputBox'>
                                <textarea
                                    onChange={(e) => setDescripcion(e.target.value)}

                                />


                            </div>

                            <div className='inputBox'>
                                <input
                                    type='date'
                                    name='inicio'
                                    onChange={(e) => setInicio(e.target.value)}

                                />
                            </div>

                            <div className='inputBox'>
                                <input
                                    type='date'
                                    name=''
                                    onChange={(e) => setTermino(e.target.value)}

                                />
                            </div>

                            <div className='inputBox'>
                                <button
                                    onClick={addTask}
                                    className='btn-login'
                                >
                                    Guardar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
