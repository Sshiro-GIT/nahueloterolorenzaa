import React, { useContext } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { cartContext } from '../../Context/CartContext';
import IconButton from '@mui/material/IconButton';
import { Badge } from '@mui/material';

const CartWidget = () => {
const { qtyProducts } = useContext(cartContext);
  
  return (
    <>
      <div style={styles} >
        <IconButton aria-label="show cart items" color="inherit" >
          <Badge badgeContent={qtyProducts} color="secondary">
            <ShoppingCartIcon fontSize="large" color="secondary"/>
          </Badge>
        </IconButton>
      </div>
    </>
  )
};

const styles = {
  cart:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
};

export default CartWidget
