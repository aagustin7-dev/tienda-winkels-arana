import React, {useEffect, useState} from 'react';
import ItemCount from './ItemCount.js';
import ItemDetail from "./ItemDetail.js";
import Item from "./Item";

const ItemDetailContainer = ({ onAdd }) => {

    let [cant, setCant] = useState(1);

    const stock = 5;

    const restar = () => {
        if ( cant > 1 ){
            setCant(--cant);
        }
    }

    const sumar = () => {
        if ( cant < stock ){
            setCant(++cant);
        }
    }

    const mostrarMensaje = () => {
        alert("Compra realizada");
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
            <ItemDetail title={producto_detalle.title} description={producto_detalle.description} price={producto_detalle.price} pictureUrl={producto_detalle.pictureUrl } categoria_id={producto_detalle.categoria_id} />
            <ItemCount onAdd={onAdd} sumar={sumar} restar={restar} cant={cant} mostrarMensaje={mostrarMensaje} />
        </>
    );
}
export default ItemDetailContainer;