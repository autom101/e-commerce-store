import { useState, createContext } from "react";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (productId) => {
    const newCartItems = { ...cartItems };
    const quantity = newCartItems[productId] || 0;
    newCartItems[productId] = quantity + 1;
    setCartItems(newCartItems);
  };

  const removeFromCart = (productId) => {
    const newCartItems = { ...cartItems };
    const quantity = newCartItems[productId] || 1;
    newCartItems[productId] = quantity - 1;
    setCartItems(newCartItems);
  };

  const contextValue = { cartItems, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
