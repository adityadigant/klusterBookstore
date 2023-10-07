import React, { useState } from "react";
import PropTypes from "prop-types";
import { useCart } from "../CartContext";
import { Link } from "react-router-dom";
import "../styles/Books.css"

const Book = ({ book }) => {
  const { cart, addToCart } = useCart();

  return (
    <div className="book">
      <img
        src={book.image} // Use actual image paths or placeholders
        alt={book.title}
        className="book-cover"
      />
      <div className="book-details">
        <h3>{book.title}</h3>
        <p>Author: {book.author}</p>
        <p>Genre: {book.genre}</p>
        <p>Description: {book.description}</p>
        <p>Price: ${book.price}</p>
        <button className="add-to-cart" onClick={() => addToCart(book)}>
          Add to Cart
        </button>
        <Link to={`/book/${book.id}`}>
          <button>View Details</button>
        </Link>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
