import React from 'react';

/* Import  */
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'

/* Importa acciones */
import { setNumberItem } from '../store/slices/pagination.slice';

const Setting = () => {

    /* Navigate */
    const navigate = useNavigate()

    /* Creamos Dispatch */
    const dispatch = useDispatch();
    /* Dispatch Accion -  Set number item for page */
    const setPokemonItem = (data) => {
        dispatch(setNumberItem(data))
        /* Back to page */
        navigate(-1)
    }

    return (
        <div>
            <div><Link to='/pokemon'><p className='button_back'></p> </Link></div>
            <div>
                <h1>Setting</h1>
                <div className='setting'>
                    <ul className='ul-setting'>
                        <li onClick={() => setPokemonItem(4)}>Item 4</li>
                        <li onClick={() => setPokemonItem(8)}>Item 8</li>
                        <li onClick={() => setPokemonItem(12)}>Item 12</li>
                        <li onClick={() => setPokemonItem(16)}>Item 16</li>
                        <li onClick={() => setPokemonItem(20)}>item 20</li>
                    </ul>
                </div>
            </div>
            <br/>
        </div>
    );
};

export default Setting;