import React, {useContext, useEffect, useState} from 'react';
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import {CartContext} from "./CartContextProvider";

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -10,
        top: 10,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px'
    },
}));

const CartWidget = () => {

    let { cart } = useContext(CartContext);
    let cantProduct = 0;
    //let result = 0;


    {/* const cantidadProducto = (item) => {
        return item.cantidadProducto;
    }

    const sum = (prev, next) => {
        return prev + next;
    } */}


    if (cart.length !== 0){
        cantProduct = cart.map(function (item, index, array){
            return item.cantidadProducto;
        });
    }

    useEffect(() => {
    }, [cantProduct]);

    //console.log(cantProduct);

    return (

        <IconButton aria-label="cart">
            <StyledBadge badgeContent={cantProduct} showZero color="primary" >
                <ShoppingCartIcon sx={{ p: 0, color: "white", fontSize: 30 }}/>
            </StyledBadge>
        </IconButton>

    );
}
export default CartWidget;