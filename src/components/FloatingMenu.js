import React, { useState, useEffect } from 'react';
import logo from '../images/sparsh-logo.svg';

const FloatingMenu = () => {
  const [selectedItem, setSelectedItem] = useState('Home');

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/') {
      setSelectedItem('Home');
    } else if (path === '/about') {
      setSelectedItem('about');
    }
  }, []);

  return (
    <>
    <div className="fixed top-10 mx-9 logo-mob">
      <a href="/" onClick={() => setSelectedItem('Home')}><img src={logo} alt="logo" className="w-40" /></a>
    </div>
    <div className="fixed top-10 left-1/2 transform -translate-x-1/2" style={{zIndex:'20'}}>
        <nav className="bg-white bg-opacity-10 rounded-full px-4 py-2 flex flex-row backdrop-blur-sm">
          <a
            href="/"
            onClick={() => setSelectedItem('Home')}
            className={`flex-1 text-center py-2 px-8 text-white ${selectedItem === 'Home'
                ? 'bg-gray-500 text-white rounded-full bg-opacity-20 '
                : 'text-white-600 rounded-full '} transition duration-500`}
          >
            Home
          </a>
          <a
            href="/about"
            onClick={() => setSelectedItem('about')}
            className={`flex-1 text-center py-2 px-8 text-white ${selectedItem === 'about' ? 'bg-gray-500 text-white rounded-full bg-opacity-20' : 'text-white-600 rounded-full'} transition duration-500`}
          >
            About
          </a>
          <a
            href="mailto:sparshbajaj@reviewitnerd.com?subject=Lets%20Work%20Together"
            onClick={() => setSelectedItem('Contact')}
            className={`flex-1 text-center py-2 px-8 text-white ${selectedItem === 'Contact'
                ? 'bg-gray-500 text-white rounded-full bg-opacity-20'
                : 'text-white-600 rounded-full'} transition duration-500`}
          >
            Contact
          </a>
        </nav>
      </div></>
  );
};

export default FloatingMenu;