import React, {useEffect, useState} from 'react';
import ItemCount from './ItemCount.js';
import ItemDetail from "./ItemDetail.js";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";

const ItemDetailContainer = ({}) => {

    const [addedToCart, setAddedToCart] = useState(false);

    //contador

    let [cantidadProducto, setcantidadProducto] = useState(1);
    const stock = 5;

    const restar = () => {
        if ( cantidadProducto > 1 ){
            setcantidadProducto(--cantidadProducto);
        }
    }

    const sumar = () => {
        if ( cantidadProducto < stock ){
            setcantidadProducto(++cantidadProducto);
        }
    }

    const producto_detalle = {
        id: 1,
        title: "Product Name",
        description: "Product Description",
        price: "Product Price",
        pictureUrl: "https://static1.squarespace.com/static/5c3f14108ab722debd73a9f5/t/5de2fc4936172f0b2fbc3806/1575156810265/products_brochure_design-min.png",
        categoria_id: 1}

    return (

        <>
            <ItemDetail id={producto_detalle.id} title={producto_detalle.title} description={producto_detalle.description} price={producto_detalle.price} pictureUrl={producto_detalle.pictureUrl } categoria_id={producto_detalle.categoria_id} />
            {!addedToCart && <ItemCount setAddedToCart={setAddedToCart} id={producto_detalle.id} title={producto_detalle.title} description={producto_detalle.description} price={producto_detalle.price} pictureurl={producto_detalle.pictureUrl } categoria_id={producto_detalle.categoria_id} sumar={sumar} restar={restar} cantidadProducto={cantidadProducto} /> }
            {addedToCart && <p>
                <Link to={"/cart"} style={{ textDecoration: 'none', color: 'white' }}>
                    <Button color="success" variant="contained">Finalizar Compra</Button>
                </Link>
            </p>}

        </>
    );
}
export default ItemDetailContainer;