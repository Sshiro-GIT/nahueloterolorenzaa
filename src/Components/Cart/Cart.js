/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from 'react';
import { cartContext } from '../../Context/CartContext';
import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { red } from '@mui/material/colors';

const Cart = () => {
  const {products, deleteProduct, clear, qtyProducts} = useContext(cartContext);

  return (
    <div style={styles.div}>
      {products.map(product => <div key={product.id}>
        <div>
          <p>{product.title}</p>
          <img src={product.image} style={styles.img}/>
          <p>{product.price}</p>
          <p>{qtyProducts * product.price}</p>
          <button onClick={() => deleteProduct(product.id)}>eliminar producto</button>
        </div>
        
      </div>)}
      <div>
        <Stack spacing={2} direction="row">
          <Button variant="contained" color="secondary" onClick={() => clear(products)}>limpiar carrito</Button>
          <Link to="/paymentform">
            <Button variant="contained" color="secondary" >finalizar compra</Button>
          </Link>
        </Stack>
      </div>
    </div>
  )
};

const styles = {
  img: {
    width: "40%"
  },
  div:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  }
};

export default Cart
