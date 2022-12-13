import { useState } from "react"
import alcohol3 from '../../assets/alcohol3.jpg'
import './login.styles.css';
import axios from 'axios'
import UserContext from "../../context/Usercontext";
import { useContext } from 'react'
import Swal from 'sweetalert2'
import Spinner from '../spinner/Spinner.component'


const Login = () => {

    const [register, setRegister] = useState(false)
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(false)

    const context = useContext(UserContext)

    const handleRegister = (event) => {
        event.preventDefault()
        if (register) {
            setLoading(true)
            context.signUp(user)
            setLoading(false)
        } else {
            setLoading(true)
            context.login(user)
            setLoading(false)
        }
    }

    const handleInput = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    return (

        <div className="row container p-4">
            <div className="col-md-8">
                <div>
                    <img src={alcohol3} alt="..." className='image-size' />
                </div>
            </div>
            {/* {formulario} */}
            <div className="col-md-4">
                <div className="mt-5 ms-5"></div>
                {/* render condicional */}
                <h1 className="login-title mb-3 text-white">{register ? 'Registrarse' : 'Iniciar sesión'}</h1>
                <form type='submit'>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="email">Email:</label>
                        <input
                            name="email"
                            type="email"
                            className="form-control"
                            placeholder="Escribe tu email"
                            id="email"
                            onChange={(e) => handleInput(e)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="password">Contraseña:</label>
                        <input
                            name="password"
                            type="password"
                            className="form-control"
                            placeholder="Escribe tu contraseña"
                            id="password"
                            onChange={(e) => handleInput(e)}
                            required
                        />
                    </div>
                    <button
                        className="btn btn-primary"
                        type="submit"
                        onClick={(event) => handleRegister(event)}
                    >
                        {loading 
                        ? <Spinner />
                        : register
                        ? 'Registrarse'
                        : 'Iniciar sesión'}
                    </button>
                    <button
                        className="btn btn-secondary mt-4 form-control"
                        onClick={() =>setRegister(!register)}
                    >
                        {register ? 'Estas registrado? Inicia sesión' : 'No estas registrado? Registrate'}
                    </button>
                </form>
            </div>
        </div>

    )
}

export default Login