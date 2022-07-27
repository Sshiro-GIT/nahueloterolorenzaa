import React, { useContext } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { cartContext } from '../../Context/CartContext';

const CartWidget = () => {
const { qtyProducts } = useContext(cartContext);
  
  return (
    <>
      <div style={styles}>
        <ShoppingCartIcon fontSize="large" />
        <p>{qtyProducts}</p>
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
