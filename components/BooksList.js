import React from "react";
import Link from "next/link";

const BooksList = ({ books }) => {
  return (
    <div className="books">
      {books.map((book) => (
        <Link href={`/${book.id}`} key={book.id}>
          <div className="book" key={book.id}>
            <img
              src={
                book.volumeInfo.imageLinks &&
                book.volumeInfo.imageLinks.thumbnail
              }
              alt=""
            />

            <h1>{book.volumeInfo.title}</h1>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BooksList;
