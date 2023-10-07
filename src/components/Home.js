import React from "react";
import "../styles/Home.css"; // Import your CSS file
import mockBooks from "../data/mockBooks.json";
import { useCart } from "../CartContext";

const Home = () => {
  // Mock data for featured books
  const { cart, addToCart } = useCart();

  return (
    <div className="featured-book-container">
      <div className="featured-book-details">
        <h2 className="featured-book-title">Welcome to the Bookstore</h2>
        <h3 className="featured-book-description">Our Featured Books</h3>
        <div className="featured-book">
          {mockBooks.map(
            (book) =>
              book.featured === "Y" && (
                <div key={book.id} className="featured-book-content">
                  <img
                    src={book.image} // Use actual image paths or placeholders
                    alt={book.title}
                    className="featured-book-cover"
                  />
                  <div className="featured-book-description">
                    <h3>{book.title}</h3>
                    <p>Author: {book.author}</p>
                    <p>Genre: {book.genre}</p>
                    <p>Description: {book.description}</p>
                    <p>Price: ${book.price}</p>
                    <button
                      className="add-to-cart"
                      onClick={() => addToCart(book)} // Add the book to the cart
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
