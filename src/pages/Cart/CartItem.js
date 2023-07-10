const CartItem = ({ product, quantity }) => {
  const { name, price, image } = product;
  return (
    <div className="cart-item">
      <img className="cart-item-image" src={image} alt={`${name}`} />
      <div className="cart-item-description">
        <p>
          <b>{name}</b>
        </p>
        <p>${price * quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;