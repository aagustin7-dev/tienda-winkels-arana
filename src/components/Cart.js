import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import {Grid, List, ListItem, ListItemAvatar, ListItemText, TextField} from "@mui/material";
import {CartContext} from "./CartContextProvider";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import DeleteIcon from '@mui/icons-material/Delete';
import Item from "./Item";
import Box from "@mui/material/Box";


const Cart = () => {

    let { cart, getTotalProducts, removeFromCart } = useContext(CartContext);

    const mostrarMensaje = () => {
        alert("Compra efectuada");
    }

        return (
            <>
                <br/>
                <hr style={{'width': '100%'}}/>
                <Grid container>
                    <Grid item xs={12}>
                        <p style={{ fontFamily: 'monospace', backgroundColor: 'aliceblue', borderRadius: '10px', width: '50%', marginLeft: '25%' }}> • Carrito •  </p>
                    </Grid>

                    {cart.map((item) => {
                            return (
                                <Grid item xs={12}>
                                    <hr style={{'width': '50%'}}/>
                                    <div style={{ 'border-left': '1px solid hsla(200, 10%, 50%,100)'}} >
                                        <img style={{'width': '150px', 'height': '150px', 'border-radius': '10px'}} src={item.pictureUrl} />
                                        <p style={{ margin:4, fontFamily: 'fantasy', fontSize: '30px' }}>{item.title}</p>
                                        <p style={{ margin:10, fontFamily: 'Papyrus', fontSize: '25px' }}>
                                            Cantidad: <TextField style={{ 'width': '50px' }}
                                            id="outlined-size-small"
                                            defaultValue={item.cantidadProducto}
                                            size="small"
                                            disabled={true}
                                        />
                                        </p>
                                        <p style={{ margin:10, fontFamily: 'Garamond', fontSize: '25px' }}>Precio final del producto: ${(item.price * item.cantidadProducto).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".")}</p>
                                        <p><Button onClick={ () => {removeFromCart(item.id)}} variant="contained" color="error">Borrar Producto</Button></p>
                                    </div>
                                </Grid>
                            );
                        })}

                    </Grid>
                <hr style={{'width': '85%'}}/>
                {getTotalProducts().cantidadProducto === 0 && <p>
                    <h2>No hay productos agregados</h2>
                    <Link to={"/home"} style={{ textDecoration: 'none', color: 'white' }}>
                        <Box>
                            <Button variant="contained">Volver</Button>
                        </Box>
                    </Link>
                    </p>}
                {getTotalProducts().cantidadProducto > 0 && <p><b>Monto Total:</b> ${getTotalProducts().price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".")}
                    <Box>
                        <br/>
                        <Button onClick={ () => {mostrarMensaje()}} variant="contained">Comprar</Button>
                        <p>
                            <Link to={"/home"} style={{ textDecoration: 'none', color: 'white' }}>
                                <Button variant="contained">Ver más productos</Button>
                            </Link>
                        </p>
                    </Box>
                </p>}
                <br/>
            </>
        );
    }
export default Cart;