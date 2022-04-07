import React, {useState} from 'react';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const ItemCount = ({ onAdd, sumar, restar, cant, mostrarMensaje }) => {

    return(

        <div>
            <Box sx={{ display:"flex", flexWrap:"wrap", justifyContent:"space-evenly", mx: "auto", width: 200 }}>
                <Button onClick={restar} size="small" color="primary" variant="contained"><b>-</b></Button>
                {cant}
                <Button onClick={sumar} size="small" color="primary" variant="contained"><b>+</b></Button>
            </Box>
            <br />
            <Box sx={{ display:"flex", flexWrap:"wrap", justifyContent:"space-evenly", mx: "auto", width: 300 }} >
                <Button onClick={ () => onAdd(cant) } variant="contained">Agregar al carro</Button>
                <Button onClick={ () => mostrarMensaje() } color="success" variant="contained">Comprar</Button>
            </Box>


        </div>

    );

}
export default ItemCount;