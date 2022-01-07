import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MaterialTable from 'material-table';
import { useNavigate } from 'react-router';
import { deleteProyect } from './deleteProyect';

export const ProyectScreen = () => {


    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const baseUrl = process.env.REACT_APP_API + '/Administracion/Proyectos/get';

    const navigateTo = () => {
        navigate('/addProyect')
    }
    const peticionGet = async () => {
        await axios.get(baseUrl)
            .then(response => {
                setData(response.data);
                //console.log(response.data);       
            })
    }

    useEffect(() => {
        peticionGet();

    }, [])

    async function saveHito(proyecto){
        let nombre = "Hito X";
        let item = {proyecto, nombre};
        let result = await fetch(process.env.REACT_APP_API +'/Administracion/Proyectos/saveHito',{
            method:"POST",
            body: JSON.stringify(item)
        });
        console.log(item);
        result = await result.json();
        const { correcto, mensaje } = result;

        if( !correcto ) {
            alert(mensaje);
        } else {
            navigate()
        }

    }


    const columnas = [
        {
            title: 'Id',
            field: 'id',
            type: 'numeric'
        },
        {
            title: 'Nombre',
            field: 'nombre',
        },
        {
            title: 'Fecha Inicio',
            field: 'inicio',
        },
        {
            title: 'Fecha Termino',
            field: 'termino',
        },
        {
            title: 'Jefe Proyecto',
            field: 'jefe_proyecto',
        },

    ];


    return (
        <div className='container'>

            <button className='primaryBtn' onClick={navigateTo}>
                Proyecto Nuevo
            </button>

            <MaterialTable
                columns={columnas}
                editable={{
                    onRowAdd: (newRow) => new Promise((resolve, reject) => {

                    })
                }}
                data={data}
                title='Gestión de proyectos'
                actions={[
                    {
                        icon: 'edit',
                        tooltip: 'Editar',
                        onClick: (event, rowData) => alert('Has presionado Editar' + rowData.id)
                    },
                    {
                        icon: 'delete',
                        tooltip: 'Eliminar',
                        onClick: (event, rowData) => deleteProyect(rowData.id)
                    },
                    {
                        icon: 'add',
                        tooltip: 'Crear Hito',
                        onClick: (event, rowData) => saveHito(rowData.id)
                    },
                ]}
                options={{ actionsColumnIndex: -1 }}
            />
        </div>
    )
}
