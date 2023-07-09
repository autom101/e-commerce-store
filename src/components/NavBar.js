import { Link } from "react-router-dom";
import { ShoppingCartSimple } from "phosphor-react";
import "./NavBar.css";

const NavBar = () => {
  //A navbar with Link components from react router to let us navigate to various pages of the app
  //to
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <ShoppingCartSimple size="32" />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
