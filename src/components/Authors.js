import React, { useState } from 'react';
import Author from './Author';
import  mockBooks  from '../data/mockBooks';

const Authors = () => {
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  const handleAuthorClick = (authorName) => {
    setSelectedAuthor(authorName);
  };

  let newArr = mockBooks.filter((elem, index, arr) => {
    return index == arr.findIndex(x => {return x.authorID == elem.authorID})
})
  console.log(newArr,"duplicate author");

  return (
    <div>
      <h2>All Authors</h2>
      <ul>
        {newArr.map((book) => (
          <li
            key={book.author}
            onClick={() => handleAuthorClick(book.author)}
          >
            {book.author}
          </li>
        ))}
      </ul>

      {selectedAuthor && <Author authorName={selectedAuthor} />}
    </div>
  );
};

export default Authors;
