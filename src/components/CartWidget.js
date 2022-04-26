import React, {useContext, useEffect, useState} from 'react';
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import {CartContext} from "./CartContextProvider";
import {Link} from "react-router-dom";

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -10,
        top: 10,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px'
    },
}));

const CartWidget = () => {
    const [cantidad, setCantidad] = useState(0);
    let { cart } = useContext(CartContext);
    


    useEffect(() => {
        let suma = 0;
        cart.forEach((item)=>suma=suma+item.cantidadProducto);
        setCantidad(suma);
    }, [cart]);

    return (

        <Link to={"/cart"}>
            <IconButton aria-label="cart">
                <StyledBadge badgeContent={cantidad} showZero color="primary" >
                    <ShoppingCartIcon sx={{ p: 0, color: "white", fontSize: 30 }}/>
                </StyledBadge>
            </IconButton>
        </Link>

    );
}
export default CartWidget;