import React from 'react';
import { bookListMockResponse } from '../components/BookMockData';
import BookRowList from '../components/BookRowList';
import './mybooks.css';

const MyBooksPage: React.FC = () => {
  return (
    <>
      {/* Title */}
      <section className="mybooks-title-container">
        <div>My Books</div>
      </section>
      {/* Switch Tab books */}
      <section className="mybooks-tabs-container">
        <div className="mybooks-tabs-button-container">
          <div className="mybooks-tabs-active">Rated Books</div>
          <div className="mybooks-tabs-inactive">Bookmarked</div>
        </div>
      </section>
      {/* Books Row List */}
      <section>
        <BookRowList books={bookListMockResponse} />
      </section>
    </>
  );
};

export default MyBooksPage;
