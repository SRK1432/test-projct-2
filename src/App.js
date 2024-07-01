import React, { useState } from "react";
import Store from "./components/Store";
import Cart from "./components/Cart";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, size) => {
    setCart((prevCart) => [...prevCart, { ...product, size }]);
  };

  return (
    <>
      <h2>T-shirts Website</h2>
      <Store addToCart={addToCart} />
      <Cart cart={cart} />
    </>
  );
};

export default App;
