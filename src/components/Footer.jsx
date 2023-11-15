import React from 'react';
import './Footer.css';

const Footer = ({ onComponentClick }) => {
  return (
    <div className="bottom-nav custom-block-bottom">
      <div className="custom-block-bottom-item">
        <a href="#" className="flex-column" onClick={() => onComponentClick('deposit')}>
          <i className="custom-block-icon bi-wallet"></i>
          <small>Top up</small>
        </a>
      </div>
      <div className="custom-block-bottom-item">
        <a href="#" className="flex-column" onClick={() => onComponentClick('withdraw')}>
          <i className="custom-block-icon bi-arrow-down"></i>
          <small>Withdraw</small>
        </a>
      </div>
      <div className="custom-block-bottom-item">
        <a href="#" className="flex-column" onClick={() => onComponentClick('send')}>
          <i className="custom-block-icon bi-send"></i>
          <small>Send</small>
        </a>
      </div>
      <div className="custom-block-bottom-item">
        <a href="#" className="flex-column" onClick={() => onComponentClick('profile')}>
          <i className="custom-block-icon bi-bi-person"></i>
          <small>Profile</small>
        </a>
      </div>
    </div>
  );
};

export default Footer;