import React from 'react';
import Container from '@mui/material/Container';
import AppBar from "@mui/material/AppBar";

const Footer = () => {

        return (
            <>
                <AppBar position="static" style={{background: '#2E3B55', opacity: 0.8, fontFamily: 'Papyrus', fontSize: '15px', width: '100%'}}>
                    <Container maxWidth="xl" fixed>
                        <p>Copyright © Winkels 2022 - Coder House</p>
                    </Container>
                </AppBar>
            </>
        );
    };

export default Footer;
