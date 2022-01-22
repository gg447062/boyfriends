import React from 'react';
import Meat from './Meat';
import Info from './Info';
import Footer from './Footer';

const Minter = () => {
  return (
    <div className="minter">
      <Info />
      <Meat />
      <Footer />
    </div>
  );
};

export default Minter;
