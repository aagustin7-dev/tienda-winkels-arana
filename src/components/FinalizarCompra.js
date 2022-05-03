import React, {useContext, useEffect, useState} from 'react';
import Button from "@mui/material/Button";
import {CartContext} from "./CartContextProvider";
import {Link} from "react-router-dom";
import {Grid, TextField} from "@mui/material";

const FinalizarCompra = () => {

    let { clientInfo, cleanCart } = useContext(CartContext);

    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");

    const changeEmail = (email) => {
        setEmail(email);
        clientInfo({ nombre: nombre, telefono: telefono, email: email });
    }

    const changeName = (nombre) => {
        setNombre(nombre);
        clientInfo({ nombre: nombre, telefono: telefono, email: email });
    }

    const changePhone = (telefono) => {
        setTelefono(telefono);
        clientInfo({ nombre: nombre, telefono: telefono, email: email });
    }


    return (
        <>

            <hr style={{'width': '100%'}}/>
            <Grid container>
                <Grid item xs={12}>
                    <p style={{ fontFamily: 'monospace', backgroundColor: 'aliceblue', borderRadius: '10px', width: '50%', marginLeft: '25%' }}> • ¡Confirmá tu compra! •  </p>
                </Grid>
                <Grid item xs={12}>
                    <hr style={{'width': '50%'}}/>

                    <h4>Ingresá tus datos</h4>
                    <p><TextField type={'text'} value={nombre} id="outlined-basic" label="Escribí tu Nombre" variant="outlined" onChange={(e) => { changeName(e.currentTarget.value); }} /></p>
                    <p><TextField type={'text'} value={telefono} id="outlined-basic" label="Escribí tu Telefono" variant="outlined" onChange={(e) => { changePhone(e.currentTarget.value); }} /></p>
                    <p><TextField type={'text'} value={email} id="outlined-basic" label="Escribí tu Email" variant="outlined" onChange={(e) => { changeEmail(e.currentTarget.value); }}  /></p>
                </Grid>
                <Grid item xs={12}>
                        {
                        nombre.length === 0 || telefono.length === 0 || email.length === 0 ?
                            <></>
                            :
                            <Link to={"/informacion-compra"} style={{ textDecoration: 'none', color: 'white' }}>
                                <Button variant="contained" color="success">Comprar</Button>
                            </Link>
                        }
                </Grid>
            </Grid>
            <br />
            <br />

        </>
    );
}
export default FinalizarCompra;