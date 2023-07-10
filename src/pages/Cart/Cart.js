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

  const subTotal = existingProducts.reduce((prev, current) => {
    const quantity = cartItems[current.id];
    const price = current.price;
    return prev + quantity * price;
  }, 0);

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

      <section className="cart-subtotal">
        <h2>Sub Total: ${subTotal}</h2>
      </section>
    </div>
  );
};

export default Cart;
