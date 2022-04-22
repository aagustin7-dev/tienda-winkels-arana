import React, {useContext, useState} from 'react';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {CartContext} from "./CartContextProvider";

const ItemCount = ({ product, setAddedToCart }) => {
    const [cantidadProducto, setcantidadProducto] = useState(1);
    const {id, title, description, price, pictureurl} = product;
    let { cart, addToCart } = useContext(CartContext);

    const stock = 5; 

    const restar = () => {
        if ( cantidadProducto > 1 ){
            setcantidadProducto(cantidadProducto - 1);
        }
    }

    const sumar = () => {
        if ( cantidadProducto < stock ){
            setcantidadProducto(cantidadProducto + 1);
        }
    }

    return(

        <>
            <Box sx={{ display:"flex", flexWrap:"wrap", justifyContent:"space-evenly", mx: "auto", width: 200 }}>
                <Button onClick={restar} size="small" color="primary" variant="contained"><b>-</b></Button>
                {cantidadProducto}
                <Button onClick={sumar} size="small" color="primary" variant="contained"><b>+</b></Button>
            </Box>
            <br />
            <Box sx={{ display:"flex", flexWrap:"wrap", justifyContent:"space-evenly", mx: "auto", width: 300 }} >
                <Button onClick={ () => {addToCart(product, cantidadProducto); setAddedToCart(true)} } variant="contained">Agregar al carro</Button>
            </Box>
            <br/>
        </>

    );

}
export default ItemCount;