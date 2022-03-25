import React from 'react';
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -10,
        top: 10,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px'
    },
}));


function CartWidget() {
    return (

        <IconButton aria-label="cart">
            <StyledBadge badgeContent={0} showZero color="primary" >
                <ShoppingCartIcon sx={{ p: 0, color: "white", fontSize: 30 }}/>
            </StyledBadge>
        </IconButton>

    );
}
export default CartWidget;