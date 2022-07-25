/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from 'react'
import { cartContext } from '../../Context/CartContext';

const Cart = () => {
  const {products, deleteProduct, clear, qtyProducts} = useContext(cartContext)

  return (
    
      <div style={styles.div}>
        <h1> carrito de compras </h1>
        {products.map(product => <div key={product.id}>
          <p>{product.title}</p>
          <img src={product.image} style={styles.img}/>
          <p>{product.price}</p>
          <p>{qtyProducts * product.price}</p>
          <button onClick={() => deleteProduct(product.id)}>holaa</button>
        </div>)}
        <button onClick={() => clear(products)}>limpiar</button> 
      </div>
  )
}
const styles = {
  img: {
    width: "40%"
  },
  div:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  }

}

export default Cart
