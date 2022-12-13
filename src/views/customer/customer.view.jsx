import Navbar from '../../components/navbar/Navbar.component'
import Login from '../../components/login/login.component'
import { Fragment } from 'react'

const Customer = () => {
    return(
        <Fragment>
            <Navbar/>
            <Login />
        </Fragment>
    )
}

export default Customer