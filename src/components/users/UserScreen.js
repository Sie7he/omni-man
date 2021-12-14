import React, {useState} from 'react';
import { UserData } from './UserData';

export const UserScreen = () => {


    return (
        <div>
           <UserData />
           <h1>Gestión de Usuarios</h1>

<div className= "container">
    <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="create-user" > + </button>
</div>
 <div>

 </div>

<div>
    <table className="table table-hover">
        <thead>
            <th>id</th>
            <th>token</th>
            <th>pass</th>
            <th>email</th>
            <th>nombres</th>
            <th>apellidos</th>
            <th>telefono</th>
            <th>perfil</th>
            <th>habilitado</th>
            <th>opciones</th>
        </thead>
        <tbody>
            <td>
                <tr>a</tr>
            </td>
            <td>
                <tr>a</tr>
            </td>
            <td>
                <tr>a</tr>
            </td>
            <td>
                <tr>a</tr>
            </td>
            <td>
                <tr>a</tr>
            </td>
            <td>
                <tr>a</tr>
            </td>
            <td>
                <tr>a</tr>
            </td>
            <td>
                <tr>a</tr>
            </td>
            <td>
                <tr>a</tr>
            </td>
            <td>
                <button type="button" className="btn btn-primary">Aasd</button>
                <button type="button" className="btn btn-danger">Eda</button>
            </td>
        </tbody>
    </table>
</div>
<button  type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
 </button>
        </div>
    )
}
