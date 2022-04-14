import React from 'react';
import Item from "./Item";
import {Grid} from "@mui/material";

const ItemList = ({ productos, categorias }) => {

    return (

        <Grid container>

            {/* {categorias.map(item =>
                <Categorias key={item.id} id={item.id} nombre={item.nombre} />
            )} */}

            <hr style={{ 'width': '100%' }}/>

            <Grid item xs={12}>
                <p style={{ fontFamily: 'monospace', backgroundColor: 'aliceblue', borderRadius: '10px', width: '50%', marginLeft: '25%' }}> • Productos •</p>
            </Grid>

            {productos.map(item =>
                <Item key={item.id} id={item.id} title={item.title} description={item.description} price={item.price} pictureUrl={item.pictureUrl} categoria_id={item.categoria_id} />
            )}

        </Grid>

    );
}
export default ItemList;