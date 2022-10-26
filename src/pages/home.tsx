import React from 'react';
import AdsCarousel from '../components/AdsCarousel';
import { authorListMockResponse } from '../components/AuthorMockData';
import AuthorSlideList from '../components/AuthorSlideList';
import { bookListMockResponse } from '../components/BookMockData';
import BookSlideList from '../components/BookSlideList';
import UserHeader from '../components/UserHeader';
import './home.css';

// eslint-disable-next-line arrow-body-style
const HomePage: React.FC = () => {
  return (
    <>
      {/* User greeting header */}
      <section>
        <UserHeader />
      </section>
      {/* Book List */}
      <section className="home-book-list-container">
        <BookSlideList books={bookListMockResponse} />
      </section>
      {/* Ads Carousel */}
      <section className="ads-carousel-container">
        <AdsCarousel />
      </section>
      {/* Popular Authors */}
      <section className="popular-authors-container">
        <div className="popular-author-heading">Popular Authors</div>
        <AuthorSlideList authors={authorListMockResponse} />
      </section>
    </>
  );
};

export default HomePage;
