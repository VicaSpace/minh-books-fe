import React from 'react';
import './UserHeader.css';

interface UserHeaderProps {}

const mockUser = {
  username: 'Minh',
};

const UserHeader: React.FC<UserHeaderProps> = () => {
  return (
    <div className="user-header-container">
      <div className="user-header-item-left">
        <div className="user-header-heading">Hi {mockUser.username}</div>
        <div style={{ color: '#828282' }}>What are you reading today?</div>
      </div>
      <div className="user-header-item-right">
        <img
          className="user-header-img"
          src="https://ca.slack-edge.com/E8RLKB40H-U040KAQN17G-44ed2ee20f4f-512"
          alt="user-avatar"
        />
      </div>
    </div>
  );
};

export default UserHeader;
