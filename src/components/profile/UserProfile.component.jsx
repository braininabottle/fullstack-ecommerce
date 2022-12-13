import Navbar from '../navbar/Navbar.component'
import { Fragment, useContext, useEffect, useState } from 'react'
import UserContext from '../../context/Usercontext'
import './UserProfile.styles.css'


const UserProfile = () => {

    const context = useContext(UserContext)
    const token = context.userState.token
    const { name, lastname, address } = context.userState?.user
    const { city, street } = address
    const [user, setUser] = useState({ name, lastname, city, street })


    const handleInput = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        context.getUserData(token)
    }, [])

    useEffect(() => {
        setUser({ name, lastname, city, street })
    }, [street])

    return (
        <Fragment>
            <h1 className='userFormTitle mt-4 mb-4 text-white'>Información del usuario</h1>
            <div className='userForm d-flex col-xl-12 col-lg-12 col-md-12 col-sm-12'>
                <form>
                    <label htmlFor='name' className='text-dark'>Nombre:</label>
                    <input
                        className='form-label'
                        type='text'
                        name='name'
                        onChange={(event) => handleInput(event)}
                        placeholder='ingrese su nombre'
                        defaultValue={name} />
                    <label htmlFor='lastname' className='text-dark'>Apellido:</label>
                    <input
                        className='form-label'
                        type='text'
                        name='lastname'
                        onChange={(event) => handleInput(event)}
                        placeholder='ingrese su apellido'
                        defaultValue={lastname} />
                    <label htmlFor='city' className='text-dark'>Ciudad:</label>
                    <input
                        className='form-label'
                        type='text'
                        name='city'
                        onChange={(event) => handleInput(event)}
                        placeholder='ingrese su ciudad'
                        defaultValue={city} />
                    <label htmlFor='street' className='text-dark'>Calle:</label>
                    <input
                        className='form-label'
                        type='text'
                        name='street'
                        onChange={(event) => handleInput(event)}
                        placeholder='ingrese su dirección'
                        defaultValue={street}
                    />
                    <button
                        className='btn btn-dark'
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
    )

}

export default UserProfile

// control + d