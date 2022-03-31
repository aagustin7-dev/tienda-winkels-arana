import React, {useState} from 'react';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const ItemCount = ({ onAdd, sumar, restar, cant }) => {

    return(

        <div>
            <Box display="flex" justifyContent="space-evenly">
                <Button onClick={restar} size="small" variant="outlined">-</Button>
                {cant}
                <Button onClick={sumar} size="small" variant="outlined">+</Button>
            </Box>
            <br />
            <br />
            <Button onClick={ () => onAdd(cant) } variant="contained">Agregar al carro</Button>

        </div>

    );

}
export default ItemCount;