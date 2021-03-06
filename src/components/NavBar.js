import React, {useContext, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import logoWinkels from "../assets/images/logo-winkels.png";
import CartWidget from '../components/CartWidget.js';
import {Link} from "react-router-dom";
import Categorias from "./Categorias";


    const settings = ['Perfil', 'Cerrar Sesión'];

    const NavBar = ({}) => {

        const [anchorElNav, setAnchorElNav] = useState(null);
        const [anchorElUser, setAnchorElUser] = useState(null);

        const handleOpenNavMenu = (event) => {
            setAnchorElNav(event.currentTarget);
        };
        const handleOpenUserMenu = (event) => {
            setAnchorElUser(event.currentTarget);
        };

        const handleCloseNavMenu = () => {
            setAnchorElNav(null);
        };

        const handleCloseUserMenu = () => {
            setAnchorElUser(null);
        };


        const categorias = [
            { id: 1, nombre: 'informatica' },
            { id: 2, nombre: 'telefonia' },
            { id: 3, nombre: 'deportes' }
        ];

        return (
            <AppBar position="static" style={{background: '#2E3B55'}}>
                <Container maxWidth="xl" fixed>
                    <Toolbar disableGutters>
                        <Typography
                            component="div"
                            sx={{mr: 2, display: {xs: 'none', md: 'flex'}}}
                        >
                            <Link to="/home">
                                <img style={{'width': '180px', 'height': '70px', 'borderRadius': '10px'}} src={logoWinkels}
                                 alt="Coder House React"/>
                            </Link>
                        </Typography>

                        <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon/>
                            </IconButton>

                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: {xs: 'block', md: 'none'},
                                }}
                            >
                                {categorias.map((page) =>
                                    <>
                                        <Categorias key={page.id} id={page.id} nombre={page.nombre} />
                                    </>
                                )}
                            </Menu>
                        </Box>

                        <Typography
                            component="div"
                            sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}, justifyContent: 'space-evenly'}}
                        >
                            <Link to="/home">
                                <img style={{'width': '150px', 'height': '50px', 'borderRadius': '10px'}} src={logoWinkels}
                                     alt="Coder House React"/>
                            </Link>
                            <Box></Box>
                            <Box></Box>
                            <CartWidget />
                            <Box></Box>
                            <Box></Box>
                            <Box></Box>
                        </Typography>


                        <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}, justifyContent: 'space-evenly', alignItems: 'center', my: 3,
                            color: 'white',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            fontFamily: 'default',
                            fontSize: 'medium',
                            letterSpacing: 1 }}>
                             {categorias.map((page) => (
                                 <>
                                     <Categorias key={page.id} id={page.id} nombre={page.nombre} />
                                 </>
                            ))}
                            <CartWidget />
                        </Box>

                        <Box sx={{flexGrow: 0}}>
                            <Menu
                                sx={{mt: '45px'}}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        );
    };

    export default NavBar;
