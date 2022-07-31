import React, { useContext, useState } from "react";
import { db } from "../../firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { cartContext } from '../../Context/CartContext';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

const PaymentForm = () => {
  const { products, qtyProducts } = useContext(cartContext);
  const [idVenta, setidVenta] = useState({
    nombre:'',
    telefono:'',
    email:'',
    notas:'',
    })
  const createidVenta = ({target}) => {
    setidVenta({
      ...idVenta,
      [target.name] : target.value
    })
  };
  const finishBuy = () => {
    const ventasCollection = collection(db, 'ventas');
    addDoc(ventasCollection,{
      idVenta,
      items: products,
      date: serverTimestamp(),
      stock: qtyProducts,
      total: total,
    })
    .then((result) => {
      setidVenta(result.id)
    })
  };
  let total = 0;
  for(let i = 0; i < products.length; i++){
    total += products[i].price * products[i].qty;
  };

  return (
    <>
      <h1 style={styles.div}>Ingresa tus datos</h1>
      <form onSubmit={finishBuy}>
          <div style={styles.div}>
            <label style={styles.label}>Nombre</label>
          </div>
          <div style={styles.div}>
            <input onChange={createidVenta} type="text" name="nombre" required style={styles.input}></input>
          </div>
          <div style={styles.div}>
            <label style={styles.label}>Telefono</label>
          </div>
          <div style={styles.div}>
            <input onChange={createidVenta} type="number" name="telefono" required style={styles.input}></input>
          </div>
          <div style={styles.div}>
            <label style={styles.label}>Email :</label>
          </div>
          <div style={styles.div}>
            <input onChange={createidVenta} type="email" name="email" style={styles.input}></input>
          </div>
          <div style={styles.div}>
            <label style={styles.label}>Informacion adicional :</label>
          </div>
          <div style={styles.div}>
            <input onChange={createidVenta} type="message" name="notas" style={styles.input}></input>
          </div>
          <div style={styles.div}>
            <Link to="/">
              <Button variant="contained" color="secondary" onClick={finishBuy} type="submit"> Enviar datos de compra </Button>
            </Link>
          </div>
      </form>
    </>
  );
};

const styles = {
  div:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "5px",
  },
  input:{
    color: "black",
    padding: "5px",
    width: "280px",
    height: "15px",
    borderRadius: "15px",
    fontSize: "15px",
  },
  label:{
    padding: "5px",
    fontSize: "25px",
  },
};

export default PaymentForm