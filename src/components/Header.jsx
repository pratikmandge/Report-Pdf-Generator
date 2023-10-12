import React from 'react';
import './Header.css';

const Header = () => {
  const imageUrl = 'https://img.icons8.com/color/48/chat--v1.png';

  return (
    <div className="header">
      <div className="text-container">
        <img src={imageUrl} alt="chat--v1" className="image" />
        <span className='left'>RealAssist.AI</span>
        <span className='right'><strong>123 Main Street, Dover, NH 03820-4667</strong></span>
      </div>
    </div>
  );
};

export default Header;
