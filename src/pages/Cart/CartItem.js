const CartItem = ({ product, quantity }) => {
  const { name, price, image } = product;
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
          <button>-</button>
          <p>{quantity}</p>
          <button>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
