import React, {useContext, useState} from 'react';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {CartContext} from "./CartContextProvider";

const ItemCount = ({ id, title, description, price, pictureurl, restar, sumar, cantidadProducto, setAddedToCart }) => {

    let { cart, addToCart } = useContext(CartContext);

    return(

        <>
            <Box sx={{ display:"flex", flexWrap:"wrap", justifyContent:"space-evenly", mx: "auto", width: 200 }}>
                <Button onClick={restar} size="small" color="primary" variant="contained"><b>-</b></Button>
                {cantidadProducto}
                <Button onClick={sumar} size="small" color="primary" variant="contained"><b>+</b></Button>
            </Box>
            <br />
            <Box sx={{ display:"flex", flexWrap:"wrap", justifyContent:"space-evenly", mx: "auto", width: 300 }} >
                <Button onClick={ () => {addToCart(id, title, description, price, pictureurl, cantidadProducto); setAddedToCart(true)} } variant="contained">Agregar al carro</Button>
            </Box>
            <br/>
        </>

    );

}
export default ItemCount;