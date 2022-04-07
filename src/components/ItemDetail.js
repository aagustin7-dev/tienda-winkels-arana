import React from 'react';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import notebookDell1 from "../assets/images/notebook-dell-1.jpg";
import notebookDell2 from "../assets/images/notebook-dell-2.jpg";
import notebookDell3 from "../assets/images/notebook-dell-3.jpg";
import {Grid} from "@mui/material";
import Container from "@mui/material/Container";


const ItemDetail = ({ title, description, price, pictureUrl, stockDisponible }) => {

    return (
        <Container sx={{ border: 1, borderColor: 'grey.500', borderRadius: 1 }} maxWidth="sm">
            <Grid container spacing={0}>
                <Grid item xs={12} sm={12} md={12}>
                    <Box sx={{ fontFamily: 'Raleway', fontSize: 35 }}>
                        {title}
                    </Box>
                </Grid>
            </Grid>
            <br/>
            <Grid container spacing={0}>
                <Grid item xs={6} sm={6} md={6}>
                    <Box sx={{ display:"flex", justifyContent: 'center' }} >
                        <img style={{'width': '200px', 'height': '200px', 'border-radius': '8px' }} src={pictureUrl}/>
                    </Box>
                </Grid>
                <Grid item xs={6} sm={6} md={6}>
                    <div sx={{ display:"flex" }} >
                        <p style={{ fontSize: 20}}><b>Precio:</b> {price}</p>
                        <p style={{ fontSize: 20}}><b>Stock Disponible: </b>{stockDisponible}</p>
                        <p style={{ fontSize: 20}}>✔️ Envío a domicilio </p>
                        <p style={{ fontSize: 20}}>✔️ Retirá por el local </p>

                    </div>
                </Grid>
            </Grid>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={12} md={12}>
                </Grid>
            </Grid>
            <Grid container spacing={0.5}>
                <Grid item xs={12} sm={12} md={12}>
                    <br />
                    <Box sx={{ display:"flex", justifyContent:"space-evenly", mx: "auto" }}>
                        <img style={{'width': '70px', 'height': '70px', 'border-radius': '8px'}} src={notebookDell1}/>
                        <img style={{'width': '70px', 'height': '70px', 'border-radius': '8px'}} src={notebookDell2}/>
                        <img style={{'width': '70px', 'height': '70px', 'border-radius': '8px'}} src={notebookDell3}/>
                        <img style={{'width': '70px', 'height': '70px', 'border-radius': '8px'}} src={notebookDell1}/>
                        <img style={{'width': '70px', 'height': '70px', 'border-radius': '8px'}} src={notebookDell2}/>

                    </Box>
                </Grid>
            </Grid>
            <br/>
            <Grid container>
                <Grid item xs={12} sm={12} md={12}>
                    <Box sx={{ fontFamily: 'Raleway', fontSize: 25 }}>
                        • {description} •
                        <p>¡¡¡ 50% OFF en efectivo !!!</p>
                    </Box>
                </Grid>
            </Grid>
        </Container>

    );
}
export default ItemDetail;