import { Link } from 'react-router-dom'
import { useContext } from 'react'
import UserContext from '../../context/Usercontext'
import CartContext from '../../context/CartContext'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NightlifeOutlinedIcon from '@mui/icons-material/NightlifeOutlined';
import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../navbar/navbar.styles.css';


const Navbar = () => {

    const context = useContext(UserContext)
    const cartContext = useContext(CartContext)

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));

    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                {/* <Link className="navbar-brand logo-container" to='/'>
                    <NightlifeOutlinedIcon fontSize="large" style={{ color: '#fff' }} />
                </Link> */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse justify-content-end"
                    id="navbarNav"
                >
                    <ul className="navbar-nav">
                        {context.userState.token ? <li className="mt-2 mb-3 fs-6 text-center nav-link badge bg-dark text-wrap active text-white">Bienvenido a tu usuario <AccountCircleOutlinedIcon /></li> : <li className="nav-item navFontCustomize">
                            <Link
                                to='/login'
                                className="nav-link navFontCustomize"
                            >
                                Iniciar sesión
                                <AccountCircleOutlinedIcon />
                            </Link>
                        </li>}
                        {context.userState.token ? <Link to='/profile' className="nav-link navFontCustomize" >Perfil</Link> : <li className="nav-item"></li>}
                        <li className="nav-item navCustomize">
                            <Link
                                to='/'
                                className="nav-link navFontCustomize"
                            >
                                Home
                            </Link >
                        </li>
                        <li className="nav-item">
                            <Link
                                to='/cart'
                                className="nav-item navFontCustomize"
                            >
                                <IconButton  aria-label="cart">
                                    <StyledBadge badgeContent={cartContext.cartState.qty} color="secondary" className='badgeStyle'>
                                        <ShoppingCartIcon />
                                    </StyledBadge>
                                </IconButton>
                            </Link>
                        </li>
                        {context.userState.token ? <li><button className='logOutButtonCustom nav-link' onClick={()=>context.logout()}> Cerrar sesión</button></li> : <li className=""></li>}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar