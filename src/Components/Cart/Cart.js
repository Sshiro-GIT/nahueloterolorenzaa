/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from 'react';
import { cartContext } from '../../Context/CartContext';
import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const Cart = () => {
  const {products, deleteProduct, clear, qtyProducts} = useContext(cartContext);

  return (
    <> {products.length === 0 ? <> <h1 style={styles.h1}>Tienes que agregar productos</h1> 
        <Link to="/" style={styles.h1}>
          <Button variant="contained" color="secondary" >Ingresa aqui</Button>
        </Link>
      </> 
      :
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
        <p>${products.reduce((acc, el) => acc + (el.qty * el.price), 0)}</p>
          <Stack spacing={2} direction="row">
            <Button variant="contained" color="secondary" onClick={() => clear(products)}>limpiar carrito</Button>
            <Link to="/paymentform">
              <Button variant="contained" color="secondary" >finalizar compra</Button>
            </Link>
          </Stack>
        </div>
      </div>}
    </>
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
  },
  h1:{
    display:"flex",
    textAlign:"center",
    justifyContent:"center"
  }
};

export default Cart
