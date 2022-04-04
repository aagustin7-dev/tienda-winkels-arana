import React, {useEffect, useState} from 'react';
import Item from "./Item";

const ItemList = ({ productos }) => {

    return (

        <div>

            {productos.map(item =>
                <Item id={item.id} title={item.title} description={item.description} price={item.price} pictureUrl={item.pictureUrl} />
            )}

        </div>
    );
}
export default ItemList;