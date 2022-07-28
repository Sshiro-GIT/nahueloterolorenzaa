import React, { useContext, useState } from "react";
import { db } from "../../firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { cartContext } from '../../Context/CartContext';

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
      cantidad: qtyProducts,
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
      <h3>Ingresa tus datos</h3>
      <form onSubmit={finishBuy}>
        <label>Nombre</label>
        <input onChange={createidVenta} type="text" name="nombre" required></input>
        <label>Telefono</label>
        <input onChange={createidVenta} type="number" name="telefono" required></input>
        <label>Email</label>
        <input onChange={createidVenta} type="email" name="email"></input>
        <label>Informacion Adicional</label>
        <input onChange={createidVenta} type="message" name="notas"></input>
        <button onClick={finishBuy} type="submit">
          Enviar datos de compra
        </button>
      </form>
    </>
  );
};

export default PaymentForm