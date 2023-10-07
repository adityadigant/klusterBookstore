import React from 'react';
import  mockBooks  from '../data/mockBooks';

const Author = ({ authorName }) => {
  const authorBooks = mockBooks.filter((book) => book.author === authorName);

  return (
    <div>
      <h3>{authorName}'s Books</h3>
      <ul>
        {authorBooks.map((book) => (
          <li key={book.id}>
            <h4>{book.title}</h4>
            <p>Genre: {book.genre}</p>
            <p>Description: {book.description}</p>
            <p>Price: ${book.price}</p>
            <img src={book.image} alt={book.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Author;
