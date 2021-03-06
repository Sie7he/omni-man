import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';
//import { getUser } from './UserData';
import Modal from '../modals/Modal';
import '../modals/modal.css';
import { useNavigate } from 'react-router-dom';



const baseUrl = process.env.REACT_APP_API + '/Administracion/Usuarios/get'
export const UserScreen = () => {


    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState([]);
    const [modalInsertar, setModalInsertar] = useState(false);


    const navigateTo = () => {
        navigate('/addUser')
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
            field: 'perfil_id',
            type: 'numeric'
        },
        {
            title: 'Perfil',
            field: 'perfil',
        },
        {
            title: 'Nombres',
            field: 'nombres',
        },
        {
            title: 'Apellidos',
            field: 'apellidos',
        },
        {
            title: 'Correo',
            field: 'email',
        },
        {
            title: 'Token',
            field: 'token',
        },
    ];

    return (
        <div className='container'>

            <button className='primaryBtn' onClick={navigateTo}>
                Agregar Usuario
            </button>

            <MaterialTable
                columns={columnas}
                editable={{
                    onRowAdd: (newRow) => new Promise((resolve, reject) => {

                    })
                }}
                data={data}
                title='Gestión de usuarios'
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
