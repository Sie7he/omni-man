import React, { useState }  from "react";
import  './modal.css';
import { RiCloseLine } from "react-icons/ri";

const Modal = ({ setIsOpen }) => {


    const [nombres, setNombre] = useState('');
    const [apellidos, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [value, setValue] = useState([]);
    const [perfil, setPerfil] = useState('');
    const [telefono, setTelefono] = useState('');

  return (
    <div className="container">
      <div className='darkBG' onClick={() => setIsOpen(false)} />
      <div className='centered'>
        <div className='modalw'>
          <div className='modalHeader'>
            <h5 className='heading'>Dialog</h5>
          </div>
          <button className='closeBtn' onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className='modalContent'>
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
            <select onChange={(e) => setPerfil(e.target.value)}>
                    <option >Elegir perfil...</option>
                {value.map((option) => (
                    <option value={option.id}>{option.nombre}</option>
                ))}
            </select>

            </div>
            <div className='col-md-4'>
                <button
                   
                >
                    Agregar Usuario
                </button>
            </div>
          </div>
        </div>
      </div>
      </div>
      
    
  );
};

export default Modal;