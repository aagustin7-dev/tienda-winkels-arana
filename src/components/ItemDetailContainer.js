import React, {useEffect, useState} from 'react';
import ItemCount from './ItemCount.js';
import ItemDetail from "./ItemDetail.js";
import {Link, useParams} from "react-router-dom";
import Button from "@mui/material/Button";
import { mockProducts } from './ItemListContainer';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [addedToCart, setAddedToCart] = useState(false);

    const {id} = useParams();

    useEffect(()=>{
        
        const array = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(mockProducts)

            }, 2000)

        });

        array.then((respuesta) => {
                const newProduct = respuesta.find(product => product.id === parseInt(id));
                setProduct(newProduct);
    })},[id])

    return (

        <>
            {product?.id && <ItemDetail product={product} />}
            <br/>
            {!addedToCart && product?.id && <ItemCount setAddedToCart={setAddedToCart} product={product} /> }
            {addedToCart && <p>
                <Link to={"/cart"} style={{ textDecoration: 'none', color: 'white' }}>
                    <Button color="success" variant="contained">Finalizar Compra</Button>
                </Link>
            </p>}

        </>
    );
}
export default ItemDetailContainer;