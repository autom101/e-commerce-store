import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import "./cart.css";
import CartItem from "./CartItem";

const Cart = () => {
  const { cartItems } = useContext(ShopContext);
  return (
    <div className="cart">
      <header className="cart-header">
        <h1>Cart Items</h1>
      </header>
      <section className="cart-items">
        {PRODUCTS.map((product) => {
          const quantity = cartItems[product.id];
          if (quantity && quantity > 0) {
            return <CartItem product={product} quantity={quantity} />;
          }
        })}
      </section>
    </div>
  );
};

export default Cart;
