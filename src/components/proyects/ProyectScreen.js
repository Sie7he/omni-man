import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MaterialTable from 'material-table';
import { useNavigate } from 'react-router';


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
                        onClick: (event, rowData) => alert('has presionado editar ' + rowData.artista)
                    },
                    {
                        icon: 'delete',
                        tooltip: 'Eliminar',
                        onClick: (event, rowData) => alert('has presionado Eliminar ' + rowData.artista)
                    },
                ]}
                options={{ actionsColumnIndex: -1 }}
            />
        </div>
    )
}
