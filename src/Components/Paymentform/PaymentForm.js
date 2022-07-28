import React, { useState } from 'react';
import { db } from '../../firebase/firebase';
import { collection, addDoc, serverTimestamp, doc, updateDoc } from 'firebase/firestore';

const PaymentForm = () => {
  const [idVenta, setIdVenta] = useState("");

  const datosComprador = {
    nombre: 'nahuel',
    apellido: 'otero',
    email: 'nahuelotero@gmail.com',
  };

  const finalizarCompra = () => {
    const ventasCollection = collection(db, 'ventas');
    addDoc(ventasCollection, {
      datosComprador,
      items: [{ nombre: "remera",id:1 }, { nombre: "zapato",id:2 }],
      date: serverTimestamp(),
      total: 500
    })
    .then((result) =>{
      setIdVenta(result.id)
    });
    const updateCollection = doc(db, "productos","title");
    updateDoc(updateCollection,{stock:1});
  };

  return (
    <>
      <button onClick={finalizarCompra}>Concretar Compra</button>
    </>
  );
};

export default PaymentForm