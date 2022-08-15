/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from 'react';
import { cartContext } from '../../Context/CartContext';
import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const Cart = () => {
  const {products, deleteProduct, clear,qtyProducts } = useContext(cartContext);

  return (
    <> {products.length === 0 ? <> <h1 style={styles.h1}>Tienes que agregar productos</h1> 
        <Link to="/" style={styles.h1}>
          <Button variant="contained" color="secondary" >Ingresa aqui</Button>
        </Link>
      </> 
      :
      <div style={styles.div}>
        {products.map(product => <div key={product.id}>
          <div style={styles.produ}>
            <p style={styles.text}>{product.title}</p>
            <img src={product.image} style={styles.img}/>
            <p style={styles.num2}>${product.price}</p>
            <p style={styles.num3}>${product.qty * product.price}</p>
            <Button variant="contained" color="secondary" onClick={() => deleteProduct(product.qty)}>eliminar producto</Button>
          </div>
        </div>)}
        <div style={styles.produu}>
        <p style={styles.num1}>Cantidad de productos: {qtyProducts}</p>
          <p style={styles.num1}>${products.reduce((acc, el) => acc + (el.qty * el.price), 0)}</p>
          <Stack spacing={2} direction="row">
            <Button variant="contained" color="secondary" onClick={() => clear(products)}>limpiar carrito</Button>
            <Link to="/paymentform">
              <Button variant="contained" color="secondary" >finalizar compra</Button>
            </Link>
          </Stack>
        </div>
      </div>}
    </>
  );
};

const styles = {
  produ:{
    padding:"20px",
  },
  produu:{
    padding:"20px"
  },
  img: {
    width: "20%"
  },
  div:{
    display:"flex",
    flexDirection:"column",
    alignContent:"spaceBetween",
    justifyContent:"spaceBetween",
    alignItems:"stretch",
    background:"#FFE8FC"
  },
  h1:{
    display:"flex",
    textAlign:"center",
    justifyContent:"center"
  },
  num1:{
    fontSize:"30px",
  },
  num2:{
    fontSize:"25px"
  },
  num3:{
    fontSize:"20px"
  },
  text:{
    fontSize:"25px"
  },
};

export default Cart
