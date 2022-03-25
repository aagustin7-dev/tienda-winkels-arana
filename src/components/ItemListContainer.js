import React from 'react';

function ItemListContainer({ autor, curso }) {

    let nombreTienda = "Winkels";

    return (

        <div>
            <br></br>
            <h2>Tienda {nombreTienda}</h2>
            <hr></hr>
            <h3>{curso}</h3>
            <br></br>
            <h3>{autor}</h3>
        </div>
    );
}
export default ItemListContainer;