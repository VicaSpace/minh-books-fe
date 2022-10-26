import React from 'react';
import BookRowItem from './BookRowItem';
import './BookRowList.css';

interface BookRowListProps {
  books: any[];
}

const BookRowList: React.FC<BookRowListProps> = ({ books }) => {
  return (
    <div className="book-row-list-container">
      {books.map((book) => {
        return (
          <div key={book.id} className="book-row-list-item">
            <BookRowItem
              author={book.author.name}
              imgUrl={book.img}
              title={book.name}
              price={book.price}
              avgRating={book.avgRating ? parseFloat(book.avgRating) : null}
            />
            {/* <BookCard
              author={book.author.name}
              imgUrl={book.img}
              title={book.name}
              price={book.price}
              avgRating={book.avgRating ? parseFloat(book.avgRating) : null}
            /> */}
          </div>
        );
      })}
    </div>
  );
};

export default BookRowList;
