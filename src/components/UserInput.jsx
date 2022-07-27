// Actions:
// 1. Crear la accion en el slice
// 2. Exportar la accion
// 3. Importarla en el componente donde la utilizaremos  <-
// 4. Importar y ejecutar useDispatch <-
// 5. despachamos la acción <-

import React from 'react';
import { useState } from 'react';
/* Accion  registerUser*/
import { registerUser } from '../store/slices/userName.slice';
/* Dispatch */
import { useDispatch } from 'react-redux';
/* Navigate */
import { useNavigate } from 'react-router-dom';


const UserInput = () => {

    /* Var input */
    const [name, setName] = useState("")
    /* Disapach - navigate  */
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const submit = (e) => {
        e.preventDefault();
        //  alert("form")

        /* Dispatch accion */
        dispatch(registerUser(name))

        /* Redireccion */
        navigate("/pokemon")

    }


    return (
        <div>
            <h1>What's you name ?</h1>
            <p>Give me your name to star</p>
            <div >
                <form className='form' onSubmit={submit} >
                    <input
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        className='input-form '
                    />

                    <button className='btn-form'>Submit</button>

                </form>
            </div>
        </div>
    );
};

export default UserInput;