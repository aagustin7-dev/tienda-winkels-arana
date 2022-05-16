import React, {useEffect, useState} from 'react';
import ItemCount from './ItemCount.js';
import ItemDetail from "./ItemDetail.js";
import {Link, useParams} from "react-router-dom";
import Button from "@mui/material/Button";
import {collection, getDocs, getFirestore} from "firebase/firestore";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [addedToCart, setAddedToCart] = useState(false);

    const {id} = useParams();

    useEffect(()=>{

        const db = getFirestore();
        const productosRef = collection(db, 'productos');

        getDocs(productosRef)
            .then((res) => {
                let allProducts = res.docs.map((item) => ({ id: Number(item.id), ...item.data() }));
                const newProduct = allProducts.find(product => product.id === parseInt(id));
                setProduct(newProduct);
            })

    },[id])


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