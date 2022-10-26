import React from 'react';
import './AuthorSlideList.css';

interface AuthorSlideListProps {
  authors: any[];
}

const AuthorSlideList: React.FC<AuthorSlideListProps> = ({ authors }) => {
  return (
    <div className="author-slide-list-container">
      {authors.map((author) => {
        return (
          <img
            key={author.id}
            className="author-slide-list-item-img"
            src={author.img}
            alt={`${author.name} avatar`}
          />
        );
      })}
    </div>
  );
};

export default AuthorSlideList;
