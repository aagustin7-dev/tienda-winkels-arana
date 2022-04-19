import React, {useState} from 'react';
import Button from "@mui/material/Button";
import {Grid} from "@mui/material";
import { useParams, Link } from 'react-router-dom';

const ItemDetail = ({ title, description, price, pictureUrl, categoria_id, cant }) => {

    let [cantidad, setCantidad] = useState(cant);

    const urlParams = useParams();
    let url_volver;

    if( urlParams.categoryName === "todas" ){
        url_volver = "/home";
    }else{
        url_volver = "/" + urlParams.categoryName + "/" + categoria_id;
    }

    return (
        <>
            <Grid item xs={12}>
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
                        fontFamily: 'default' }}>{price}</p>
                    <Link to={url_volver} style={{ textDecoration: 'none', color: 'white' }}>
                        <Button variant="outlined" size="small">Volver</Button>
                    </Link>
                    <p>
                    <Link to={"/cart"} style={{ textDecoration: 'none', color: 'white' }}>
                        <Button color="success" variant="contained">Finalizar Compra</Button>
                    </Link>
                    </p>
                </div>
            </Grid>
        </>

    );
}
export default ItemDetail;