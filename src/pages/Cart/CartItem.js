import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

const CartItem = ({ product, quantity }) => {
  const { addToCart, removeFromCart } = useContext(ShopContext);

  const { id, name, price, image } = product;
  console.log(product);
  return (
    <div className="cart-item">
      <img className="cart-item-image" src={image} alt={`${name}`} />
      <div className="cart-item-description">
        <p>
          <b>{name}</b>
        </p>
        <p>${price * quantity}</p>
        <div className="cart-buttons">
          <button
            onClick={() => {
              removeFromCart(id);
            }}
          >
            -
          </button>
          <p>{quantity}</p>
          <button
            onClick={() => {
              addToCart(id);
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
