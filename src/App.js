import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from './Containers/ItemListContainer/ItemListContainer';
import ItemDetailsContainer from './Containers/ItemDetailsContainer/ItemDetailsContainer';
import Cart from './Components/Cart/Cart';
import PaymentForm from './Components/Paymentform/PaymentForm';
import CartCustomProvider from './Context/CartContext';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";

const App = () => {
  return (
      <BrowserRouter>
        <CartCustomProvider >
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting='Bienvenido' />} />
            <Route path="/category/:categoryId" element={<ItemListContainer greeting='Bienvenido' />} />
            <Route path="/product/:productId" element={<ItemDetailsContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/paymentform" element={<PaymentForm />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </CartCustomProvider>
      </BrowserRouter>
  );
};

export default App



