import { PRODUCTS } from "../../products";
import Product from "./Product";
import "./shop.css";

const Shop = () => {
  return (
    <div className="shop">
      <header className="shop-header">
        <h1>My Shop</h1>
      </header>

      <section className="shop-products">
        {PRODUCTS.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
};

export default Shop;
