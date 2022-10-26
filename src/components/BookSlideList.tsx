import React from 'react';
import BookCard from './BookCard';
import './BookSlideList.css';

interface BookSlideListProps {
  books: any[];
}

const BookSlideList: React.FC<BookSlideListProps> = ({ books }) => {
  return (
    <div className="book-card-list-container">
      {books.map((book) => {
        return (
          <div key={book.id} className="book-card-list-item">
            <BookCard
              author={book.author.name}
              imgUrl={book.img}
              title={book.name}
              price={book.price}
              avgRating={book.avgRating ? parseFloat(book.avgRating) : null}
            />
          </div>
        );
      })}
    </div>
  );
};

export default BookSlideList;
