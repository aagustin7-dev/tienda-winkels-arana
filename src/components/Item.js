import React from 'react';
import Button from "@mui/material/Button";
import {Grid} from "@mui/material";
import {Link} from "react-router-dom";
import { useParams } from 'react-router-dom'

const Item = ({ id, title, description, price, pictureUrl, categoria_id }) => {

    return(
        <>
            <Grid item xs={12} md={4} >
                <br/>
                <hr style={{ 'width': '85%' }}/>
                <div style={{ 'border-left': '1px solid hsla(200, 10%, 50%,100)'}} >
                    <p style={{textTransform: 'uppercase', fontWeight: 'bold', fontFamily: 'default', fontSize: 'large', letterSpacing: 1 }} >
                        {title}
                    </p>
                    <img style={{'width': '150px', 'height': '150px', 'border-radius': '10px'}} src={pictureUrl}/>
                    <p style={{textTransform: 'full-size-kana',
                        fontWeight: 'bold',
                        fontFamily: 'default',
                        fontSize: 'medium' }}>{description}</p>
                    <p style={{textTransform: 'capitalize',
                        fontWeight: 'bold',
                        fontFamily: 'default' }}>${(price).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".")}</p>
                    <Link to={`/item/${id}`} style={{ textDecoration: 'none', color: 'white' }}>
                        <Button variant="outlined" size="small">Ver detalle</Button>
                    </Link>
                    <div style={{ fontSize: 'medium', backgroundColor: 'green', borderRadius: '10px', width: '25%', marginLeft: '70%' }}>Stock Disponible</div>
                </div>
            </Grid>
        </>
    );
}
export default Item;