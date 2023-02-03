import { Fragment, useContext, useEffect, useState } from 'react';
import UserContext from '../../context/Usercontext';
import './UserProfile.styles.css';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


const UserProfile = () => {

    const context = useContext(UserContext);
    const token = context.userState.token;
    const { name, lastname, address } = context.userState?.user;
    const { city, street } = address;
    const [user, setUser] = useState({ name, lastname, city, street });


    const handleInput = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    };

    useEffect(() => {
        context.getUserData(token)
    }, []);

    useEffect(() => {
        setUser({ name, lastname, city, street })
    }, [street]);

    return (
        <Fragment>
            <h1 className='userFormTitle mt-4 mb-4 text-white'>Información de usuario</h1>
            <div className='userForm d-flex col-xl-12 col-lg-12 col-md-12 col-sm-12'>
                <form className='user-form'>
                    <Stack direction="row" spacing={2}>
                        <Avatar style={{
                            width: 100,
                            height: 100,
                        }} src="/broken-image.jpg" />
                    </Stack>
                    <label htmlFor='name' className='custom-label text-dark mt-5'>Nombres:</label>
                    <input
                        className='form-label'
                        type='text'
                        name='name'
                        onChange={(event) => handleInput(event)}
                        placeholder='ingrese su nombre'
                        defaultValue={name} />
                    <label htmlFor='lastname' className='custom-label text-dark'>Apellidos:</label>
                    <input
                        className='form-label'
                        type='text'
                        name='lastname'
                        onChange={(event) => handleInput(event)}
                        placeholder='ingrese su apellido'
                        defaultValue={lastname} />
                    <label htmlFor='city' className='custom-label text-dark'>Ciudad:</label>
                    <input
                        className='form-label'
                        type='text'
                        name='city'
                        onChange={(event) => handleInput(event)}
                        placeholder='ingrese su ciudad'
                        defaultValue={city} />
                    <label htmlFor='street' className='custom-label text-dark'>Calle:</label>
                    <input
                        className='form-label'
                        type='text'
                        name='street'
                        onChange={(event) => handleInput(event)}
                        placeholder='ingrese su dirección'
                        defaultValue={street}
                    />
                    <button
                        className='edit  mt-3'
                        onClick={(e) => {
                            e.preventDefault()
                            context.editUserData(user)
                        }
                        }>
                        EDITAR INFORMACIÓN
                    </button>
                </form>
            </div>
        </Fragment>
    );
};

export default UserProfile;
