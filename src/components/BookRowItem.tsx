import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import './BookRowItem.css';

interface BookRowItemProps {
  title: string;
  imgUrl: string;
  author: string;
  price: number;
  avgRating: number | null;
}

const BookRowItem: React.FC<BookRowItemProps> = ({
  title,
  imgUrl,
  author,
  price,
  avgRating,
}) => {
  return (
    <div className="book-row-item-container">
      <img src={imgUrl} className="book-row-item-img" alt="row item" />
      {/* Info Section */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div>
          <AiFillStar className="book-card-star" />
          {avgRating || 4.6}
        </div>
        <div>{title}</div>
        <div className="book-row-item-author">{author}</div>
      </div>
    </div>
  );
};

export default BookRowItem;
