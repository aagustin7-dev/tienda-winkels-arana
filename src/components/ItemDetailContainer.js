import React, {useEffect, useState} from 'react';
import ItemCount from './ItemCount.js';
import ItemDetail from "./ItemDetail.js";
import Item from "./Item";

const ItemDetailContainer = ({ tienda, onAdd }) => {

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

    const [productodetalle, setProductosDetalle] = useState([]);

    useEffect(() => {

        const array = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([
                    { id: 1, title: "Notebook Dell Latitude 5400 i7 500SSD 32GB RAM", description: "Para uso laboral y gamer", price: "$200.000", pictureUrl: "https://m.media-amazon.com/images/I/6173RUlctCL._AC_SL1500_.jpg", stockDisponible: "26" }
                ])
            }, 2000)

        })

        array
            .then((respuesta) => {
                setProductosDetalle(respuesta);
            })
            .catch((error) => {
                console.log(error);
            })


    }, [])

    const mostrarMensaje = () => {
        alert("Compra realizada");
    }

    return (

        <div>
            <br />
            <h2>{tienda}</h2>
            <hr></hr>
            {productodetalle.map(item =>
                <ItemDetail id={item.id} title={item.title} description={item.description} price={item.price} pictureUrl={item.pictureUrl} stockDisponible={item.stockDisponible} />
            )}
            <br />
            <ItemCount onAdd={onAdd} sumar={sumar} restar={restar} cant={cant} mostrarMensaje={mostrarMensaje} />
            <br />

        </div>
    );
}
export default ItemDetailContainer;