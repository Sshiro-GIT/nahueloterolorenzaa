import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ItemListContainer from './Containers/ItemListContainer/ItemListContainer';
import ItemDetailsContainer from './Containers/ItemDetailsContainer/ItemDetailsContainer';
import Cart from './Components/Cart/Cart';
import PaymentForm from './Components/Paymentform/PaymentForm';
import CartCustomProvider from './Context/CartContext';
import { BrowserRouter, Routes, Route} from "react-router-dom";

const App = () => {
  return (
      <BrowserRouter>
        <CartCustomProvider >
          <Navbar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/category/:categoryId" element={<ItemListContainer/>} />
            <Route path="/product/:productId" element={<ItemDetailsContainer/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/paymentform" element={<PaymentForm/>} />
          </Routes>
        </CartCustomProvider>
        <Footer />
      </BrowserRouter>
  );
};

export default App



