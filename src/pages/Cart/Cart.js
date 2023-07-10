import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import "./cart.css";
import CartItem from "./CartItem";

const Cart = () => {
  const { cartItems } = useContext(ShopContext);
  const existingProducts = PRODUCTS.filter((product) => {
    return cartItems[product.id];
  });

  return (
    <div className="cart">
      <header className="cart-header">
        <h1>Cart Items</h1>
      </header>
      <section className="cart-items">
        {existingProducts.map((product) => {
          return (
            <CartItem
              key={product.id}
              product={product}
              quantity={cartItems[product.id]}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Cart;
