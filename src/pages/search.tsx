import { Box, Input } from '@chakra-ui/react';
import React from 'react';
import { bookListMockResponse } from '../components/BookMockData';
import BookSlideList from '../components/BookSlideList';
import RecentSearchTag from '../components/RecentSearchTag';
import './search.css';

const mockRecentSearches = ['Children', 'Sci-Fi', 'Romance', 'Adventure'];

const SearchPage: React.FC = () => {
  return (
    <>
      <section className="search-input-container">
        <Input placeholder="🔍  Search" height="40px" />
      </section>
      <section className="search-recent-searches-container">
        <div className="search-recent-heading">Recent Searches</div>
        {/* Recent Searches */}
        <Box width="380px">
          {mockRecentSearches.map((s) => {
            return <RecentSearchTag key={s} label={s} />;
          })}
        </Box>
      </section>
      {/* Search Results */}
      <section className="search-results-container">
        <div className="search-results-heading">Search Results</div>
        <BookSlideList books={bookListMockResponse} />
      </section>
      {/* All Books */}
      <section className="search-all-books-container">
        <div className="search-all-books-heading">All Books</div>
        <BookSlideList books={bookListMockResponse} />
      </section>
    </>
  );
};

export default SearchPage;
