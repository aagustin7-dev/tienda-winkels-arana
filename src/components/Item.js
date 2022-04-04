import React from 'react';
import Button from "@mui/material/Button";

const Item = ({ title, description, price, pictureUrl }) => {

    return (

        <div>
                <h3>{title}</h3>
                <br />
                <img style={{'width': '300px', 'height': '300px', 'border-radius': '10px'}} src={pictureUrl}/>
                <h5>{description}</h5>
                <p>{price}</p>
                <Button variant="contained" color="success" size="large">Ver detalle</Button>

        </div>
    );
}
export default Item;