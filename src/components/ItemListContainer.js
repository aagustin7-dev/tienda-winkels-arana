import React, {useState} from 'react';
import ItemCount from './ItemCount.js';

const ItemListContainer = ({ autor, curso, onAdd }) => {

    let nombreTienda = "Winkels";

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


    return (

        <div>
            <br />
            <h2>Tienda {nombreTienda}</h2>
            <hr></hr>
            <h3>{curso}</h3>
            <br />
            <h3>{autor}</h3>
            <br />
            <hr></hr>
            <br />
            <ItemCount onAdd={onAdd} sumar={sumar} restar={restar} cant={cant} />

        </div>
    );
}
export default ItemListContainer;