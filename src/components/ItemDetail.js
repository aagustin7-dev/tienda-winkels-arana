import React, {useContext, useState} from 'react';
import Button from "@mui/material/Button";
import {Grid} from "@mui/material";
import { Link } from 'react-router-dom';

const ItemDetail = ({product}) => {
    const { id, title, description, price, pictureUrl, categoria_id } = product;

    return (
        <>
            <Grid item xs={12}>
                <br/>
                <hr style={{ 'width': '85%' }}/>
                <div style={{ 'borderLeft': '1px solid hsla(200, 10%, 50%,100)'}} >
                    <p style={{textTransform: 'uppercase', fontWeight: 'bold', fontFamily: 'default', fontSize: 'large', letterSpacing: 1 }} >
                        {title}
                    </p>
                    <img style={{'width': '150px', 'height': '150px', 'borderRadius': '10px'}} src={pictureUrl}/>
                    <p style={{textTransform: 'full-size-kana',
                        fontWeight: 'bold',
                        fontFamily: 'default',
                        fontSize: 'medium' }}>{description}</p>
                    <p style={{textTransform: 'capitalize',
                        fontWeight: 'bold',
                        fontFamily: 'default' }}>${(price).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".")}</p>
                    <Link to={"/home"} style={{ textDecoration: 'none', color: 'white' }}>
                        <Button variant="outlined" size="small">Volver</Button>
                    </Link>
                </div>
            </Grid>
        </>

    );
}
export default ItemDetail;