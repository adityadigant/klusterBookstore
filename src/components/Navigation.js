import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navigation.css"

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/books">Books</Link>
        </li>
        <li>
          <Link to="/authors">Authors</Link>
        </li>
        <li className="shopping-cart">
          <Link to="/cart">Shopping Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
