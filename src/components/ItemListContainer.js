import React, {useEffect, useState} from 'react';
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const ItemListContainer = ({}) => {

    const [productos, setProductos] = useState([]);
    const urlParams = useParams();

    useEffect(() => {

        const db = getFirestore();
        const productosRef = collection(db, 'productos');

        getDocs(productosRef)
            .then((res) => {
            let allProducts = res.docs.map((item) => ({ id: Number(item.id), ...item.data() }));
            setProductos(allProducts
                .filter(function (producto){
                    if (!urlParams.categoryId){
                        return true;
                    }else{
                        return producto.categoria_id === Number(urlParams.categoryId)
                    }
                }));
        })

    }, [urlParams]);

    useEffect(() => {
    },[productos]);

    return (

        <>
            <br />
            <ItemList productos={productos} />
            <br />
            <hr style={{ 'width': '100%' }}/>
            <br />
        </>
    );
}
export default ItemListContainer;