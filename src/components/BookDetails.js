// BookDetails.js

import React from "react";
import mockBooks from "../data/mockBooks";
import { useEffect, useState } from "react";

const BookDetails = ({ match }) => {
  // Access the book ID from the URL params
  const bookId = match.params.id;
  const [detailBook, setDetailBook] = useState(null);

  // Fetch the book details based on the bookId
  // You can fetch data from an API or use mock data
  useEffect(() => {
    const bookDetails = mockBooks.filter((item) => item.id == bookId);
    setDetailBook(bookDetails);
  }, []);

  console.log(detailBook, "bookId");

  return (
    <>
    {detailBook &&
    <div>
      <h2>Book Details</h2>
      <img
        src={detailBook[0].image} // Use actual image paths or placeholders
        alt={detailBook[0].title}
        className="featured-book-cover"
      />
      <h3>Title: {detailBook[0].title}</h3>
      <p>Author: {detailBook[0].author}</p>
      <p>Genre: {detailBook[0].genre}</p>
      <p>Description: {detailBook[0].description}</p>
    </div>
}
    </>
  );
};

export default BookDetails;
