import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import Send from './components/Send';
import Profile from './components/Profile';

const App = () => {
  // If you want to see homePage, you can set isLoggedIn to true
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeComponent, setActiveComponent] = useState('');

  const handleComponentClick = (component) => {
    setActiveComponent(component);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'deposit':
        return <Deposit />;
      case 'withdraw':
        return <Withdraw />;
      case 'send':
        return <Send />;
      case 'profile':
        return <Profile />;
      default:
        return <Main />; 
    }
  };

  return (
    <Router>
      <div>
        {isLoggedIn ? (
          <>
            <Navbar />
            {renderComponent()}
            <Footer onComponentClick={handleComponentClick} />
          </>
        ) : (
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegistrationPage />} />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;