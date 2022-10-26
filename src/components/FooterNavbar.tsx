import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { GiWhiteBook } from 'react-icons/gi';
import { IoMdHome } from 'react-icons/io';
import { Link } from 'react-router-dom';
import './FooterNavbar.css';

const FooterNavbar: React.FC<{}> = () => {
  return (
    <div className="nav-outer-container">
      <div className="nav-container">
        <Link to="/">
          <div className="nav-item">
            <IoMdHome size={36} />
          </div>
        </Link>
        <Link to="/search">
          <div className="nav-item">
            <FiSearch size={36} />
          </div>
        </Link>
        <Link to="/my-books">
          <div className="nav-item">
            <GiWhiteBook size={36} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FooterNavbar;
