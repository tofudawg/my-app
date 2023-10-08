import React, { useState, useEffect } from 'react';
import './../App.css';
import Card from './../components/Card.js';


const CardBlock = () => {
  return (
    <div className="cards">
      <Card title="First Card" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley" buttonClass="submitbtn" />
      <Card title="Second Card" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"  buttonClass="helpme" />
      <Card title="Third Card" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley" buttonClass="helpme" />
    </div>
  );
};

export default CardBlock;
