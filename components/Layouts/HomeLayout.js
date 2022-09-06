import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

const HomeLayout = ({ children }) => {
  return (
    <div className="home font-roboto">
      <Header />
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default HomeLayout;
