import React, {useEffect, useState} from 'react';
import ItemCount from './ItemCount.js';
import ItemList from "./ItemList";

const ItemListContainer = ({ tienda, onAdd }) => {

    let [cant, setCant] = useState(1);

    const stock = 5;

    const restar = () => {
        if ( cant > 0 ){
            setCant(--cant);
        }
    }

    const sumar = () => {
        if ( cant < stock ){
            setCant(++cant);
        }
    }

    const [productos, setProductos] = useState([]);

    useEffect(() => {

        const array = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([
                    { id: 1, title: "Zapato Mujer Invierno", description: "Calzado de primera linea", price: "$3500", pictureUrl: "https://static.dafiti.com.ar/p/lady-stork-1804-208909-2-zoom.jpg" }
                ])
            }, 2000)

        })

        array
            .then((respuesta) => {
                setProductos(respuesta);
            })
            .catch((error) => {
                console.log(error);
            })


    }, [])


    return (

        <div>
            <br />
            <h2>{tienda}</h2>
            <hr></hr>
            <ItemList productos={productos} />
            <br />
            <hr></hr>
            <br />
            <ItemCount onAdd={onAdd} sumar={sumar} restar={restar} cant={cant} />

        </div>
    );
}
export default ItemListContainer;