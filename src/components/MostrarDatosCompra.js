import React, {useContext, useEffect, useState} from 'react';
import {addDoc, collection, getFirestore} from "firebase/firestore";
import {CartContext} from "./CartContextProvider";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import {Grid} from "@mui/material";

const MostrarDatosCompra = () => {

    let { cart, getTotalProducts, client, cleanCart } = useContext(CartContext);
    const [compraFinal, setCompraFinal] = useState(getTotalProducts().price);
    const [idCompra, setIdCompra] = useState("Obteniendo ID de compra...");


    const db = getFirestore();
    const ventasRef = collection(db, 'ventas');

    let bigbuyer = {
        buyer: client,
        items: cart,
        total: compraFinal
    };

    useEffect(() => {

        if(cart.length > 0){

            addDoc(ventasRef, bigbuyer).then((res) => {
                const {id} = res;
                setIdCompra(id);
            });

            cleanCart();

        }else{
            setIdCompra("No hay productos en el carro");
        }

    },[]);


    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    {idCompra &&
                        <div>
                            <br/>
                            <p style={{ margin:10, fontFamily: 'Garamond', fontSize: '25px' }}> ¡<b style={{ color: '#362577'}}>{client.nombre}</b>, gracias por tu compra!</p>
                            <br/>
                            <p style={{ margin:10, fontFamily: 'Papyrus', fontSize: '25px' }}><b>Número de Compra:</b> {idCompra}</p>
                            <br/>
                            <Link to={"/home"} style={{ textDecoration: 'none', color: 'white' }}>
                                <Button variant="contained" color="secondary">Nueva Compra</Button>
                            </Link>
                        </div>}
                    {!idCompra && <Link to={"/home"} style={{ textDecoration: 'none', color: 'white' }}>
                        <Button variant="contained" color="success">Ver Productos</Button>
                    </Link>}
                </Grid>
            </Grid>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </>
    );
}
export default MostrarDatosCompra;