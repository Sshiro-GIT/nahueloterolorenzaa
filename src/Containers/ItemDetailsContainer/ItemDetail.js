import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../../Components/ItemCount/ItemCount";
import { cartContext } from '../../Context/CartContext';

const ItemDetail = ({ product }) => {
  const [buyFinalized, setBuyFinalized] = useState(false)
  const { addProduct } = useContext(cartContext);
  const onAdd = (count) => {
    addProduct({...product, qty: count});
    setBuyFinalized(true);
  };
  
  return (
    <div style={styles.infoContainer}>
      <img style={styles.img} src={product.image} alt={product.title} />
      <div style={styles.infoTextContainer}>
        <div style={styles.infoText}>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <span style={styles.span}>${product.price}</span>
        </div>
        {buyFinalized
          ? <Link to="/cart">
              <button>Finalizar compra</button>
            </Link>
          : <ItemCount initial={1} stock={10} onAdd={onAdd} />}
      </div>
    </div>
  );
};

const styles = {
  infoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  img: {
    padding: "20px",
    width: "25%"
  },
  infoTextContainer: {
    display: "flex",
    flexDirection: "column",
  },
  span:{
    fontSize: "30px"
  },
  infoText: {
    padding: "10px",
    marging: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around"
  }
};

export default ItemDetail