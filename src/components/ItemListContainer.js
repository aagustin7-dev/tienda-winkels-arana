import React, {useEffect, useState} from 'react';
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore } from 'firebase/firestore';

{/* export const mockProducts = [
    { id: 1, title: "Notebook Dell Latitude 5400", description: "Laptop importada de primera calidad", price: 350000, pictureUrl: "https://i.pinimg.com/originals/29/79/4c/29794c4fcfcfeb2d6ff308976d9aa8ff.png", categoria_id: 1 },
    { id: 2, title: "Auricular Headset Platinum RGB48", description: "Dispositivo ultrainteligente Bluetooth", price: 2500, pictureUrl: "https://d2r9epyceweg5n.cloudfront.net/stores/001/150/806/products/sh-m11-a6c9504ce96357d81316098613730532-240-021-780720105c0876748b16168512918884-1024-1024.png", categoria_id: 1 },
    { id: 3, title: "Mouse Gamer Logitech K120", description: "Mouse con extra sensibilidad óptica", price: 3000, pictureUrl: "https://logitechar.vteximg.com.br/arquivos/ids/156566-1000-1000/910-004344_1.png?v=636973475589400000", categoria_id: 1 },
    { id: 4, title: "Iphone 11 - 128GB", description: "Celular importado con IOS v15", price: 120000, pictureUrl: "https://pngimg.com/uploads/iphone_11/iphone_11_PNG44.png", categoria_id: 2 },
    { id: 5, title: "Samsung Galaxy J20", description: "Dispostivo con Android v12", price: 80000, pictureUrl: "https://images.samsung.com/is/image/samsung/latin-galaxy-j2-sm-j250-sm-j250mzkatpa-frontblack-thumb-104411987", categoria_id: 2 },
    { id: 6, title: "Motorola G20 Rosa", description: "Móvil con cierta antiguedad Android v5", price: 50000, pictureUrl: "https://www.motorola.com.ar/arquivos/Moto-G20-pdp-kv-render-2-1hkhmb5sa.png", categoria_id: 2 },
    { id: 7, title: "Camiseta Titular PSG", description: "Remera titular oficial del Paris Saint German", price: 100000, pictureUrl: "https://i.pinimg.com/originals/5e/de/fd/5edefd783bd3e15e5896cbc5285cfdf0.png", categoria_id: 3 },
    { id: 8, title: "Pelota Oficial Mundial Qatar 2022", description: "Balón original del mundial", price: 20000, pictureUrl: "https://purodiseno.lat/wp-content/uploads/2022/03/PELOTA-ADIDAS-QATAR-DESTACADA.png", categoria_id: 3 },
    { id: 9, title: "Guantes de arquero Bayern Munich", description: "Cómodos guantes para evitar todos los goles", price: 7000, pictureUrl: "https://img.fcbayern.com/image/upload/q_auto,f_auto/w_800,h_1067,c_pad/eCommerce/produkte/25476/adidas-torwart-handschuhe.png", categoria_id: 3 }

] */}

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
        console.log(productos);
    },[productos]);

    return (

        <>
            <br />
            <ItemList productos={productos} />
            <br />
            <hr style={{ 'width': '85%' }}/>
            <br />
        </>
    );
}
export default ItemListContainer;