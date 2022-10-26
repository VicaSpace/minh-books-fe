import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import './BookCard.css';

interface BookCardProps {
  title: string;
  imgUrl: string;
  author: string;
  price: number;
  avgRating: number | null;
}

const BookCard: React.FC<BookCardProps> = ({
  title,
  imgUrl,
  author,
  price,
  avgRating,
}) => {
  return (
    <div className="book-card-container">
      <div style={{ marginBottom: '8px', position: 'relative' }}>
        <img className="book-card-img" src={imgUrl} alt="book-card-img" />
        <div className="book-card-rating">
          <span>
            <AiFillStar className="book-card-star" />
            <span className="book-card-rating-number">
              {avgRating ? avgRating.toFixed(1) : '4.6'}
            </span>
          </span>
        </div>
      </div>
      <div className="book-card-title">{title}</div>
      <div className="book-card-author">{author}</div>
      <div className="book-card-price">
        ${price}
        <span style={{ fontSize: '12px' }}>.00</span>
      </div>
    </div>
  );
};

export default BookCard;
