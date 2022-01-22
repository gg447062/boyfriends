import React from 'react';

const Meat = () => {
  return (
    <div className="meat">
      <div className="icon-container">
        <img className="icons" src="assets/images/mouse.jpg"></img>
        <div>connect wallet</div>
      </div>
      <div className="icon-container">
        <img className="icons" src="assets/images/head.jpg"></img>
        <div>mint.eth</div>
      </div>
      <div className="icon-container">
        <img className="icons" src="assets/images/face.jpg"></img>
        <div>darbytrash.link</div>
      </div>
      <div className="icon-container">
        <img className="computer" src="assets/images/computer.png"></img>
        <div id="minting">minting...</div>
      </div>
      <div className="sidebar">
        <div className="square up"></div>
        <div className="square down"></div>
      </div>
    </div>
  );
};

export default Meat;
