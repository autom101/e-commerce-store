const Product = ({ product }) => {
  const { id, name, price, image } = product;
  return (
    <div className="product">
      <img className="product-image" src={image} alt={`${name}`} />
      <div className="product-description">
        <p>
          <b>{name}</b>
        </p>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default Product;
