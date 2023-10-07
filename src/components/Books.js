import React, { useState } from "react";
import Book from "./Book";
import mockBooks from "../data/mockBooks";

const Books = () => {
  const [sortBy, setSortBy] = useState("");

  const sortedBooks = [...mockBooks]; // Create a copy of the mockBooks array
  const [sortedAcc, setSortedAcc] = useState(sortedBooks); // State to track sorting criteria

  // Function to handle sorting based on selected criteria
  const handleSort = (criteria) => {
    setSortBy(criteria);

    sortedBooks.sort((a, b) => {
      if (criteria === "genre") {
        return a.genre.localeCompare(b.genre);
      } else if (criteria === "author") {
        return a.author.localeCompare(b.author);
      }
      return 0;
    });
    console.log(sortedBooks, "sortedBooks");
    setSortedAcc(sortedBooks);
  };

  return (
    <div>
      <h2>Books Page</h2>
      <div>
        <button onClick={() => handleSort("genre")}>Sort by Genre</button>
        <button onClick={() => handleSort("author")}>Sort by Author</button>
      </div>
      <div className="book-list">
        {sortedAcc.map((book) => (
          <div key={book.id} className="book">
            <Book book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
