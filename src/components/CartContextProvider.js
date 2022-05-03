import React, {useState, createContext, useEffect} from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [client, setClient] = useState({nombre: "", telefono: "", email: ""} );

    const addToCart = (product, cantidad) => {

        const cartTemp = [...cart];
        
        const indexProducto = cart.findIndex((cartItem) => cartItem.id === product.id);

        if (indexProducto !== -1) {
            const newCart = [...cart];
            newCart[indexProducto].cantidadProducto = newCart[indexProducto].cantidadProducto  + cantidad;
            setCart(newCart);
        } else {
            cartTemp.push({...product, cantidadProducto: cantidad});
            setCart(cartTemp);
        }
    };

    const clientInfo = (cliente) => {

        setClient(cliente);

    };

    const getTotalProducts = () => {

        const total = {
            price: 0,
            cantidadProducto: 0
        }

        cart.forEach(product => {

            total.price = total.price + product.cantidadProducto * product.price
            total.cantidadProducto = total.cantidadProducto + product.cantidadProducto

        })

        return total;
    }


    const removeFromCart = (id) => {
        // elimino del carrito el elemento que sea igual a mi id
        // filter => te va a devolver un array que cumpla con lo que vos pases en la condición de la función callback
        // [1,2,3,4,5].filter((number)=>number === 5)) => devolver un nuevo array [5]
        setCart(cart.filter((cartItem) => cartItem.id !== id));
    };

    const cleanCart = () => setCart([]);

    return (
        <CartContext.Provider value={{ cart, setCart, addToCart, getTotalProducts, removeFromCart, cleanCart, client, clientInfo }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;