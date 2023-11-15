import React from 'react';
import './Profile.css';

const Profile = ({ name, accountNumber, balance }) => {
  return (
    <div className="banking-profile">
      <h2 className="banking-profile__name">{name}</h2>
      <p className="banking-profile__account-number">
        Account Number: {accountNumber}
      </p>
      <p className="banking-profile__balance">Balance: ${balance}</p>
    </div>
  );
};

export default Profile;
