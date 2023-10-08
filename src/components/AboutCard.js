import React from 'react';
import './../Aboutcard.css';

const AboutCard = ({ svg, title }) => {
  return (
    <div className="about-card">
      {svg} {}
      <p className='abouttext'>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
      </p>
    </div>
  );
};

export default AboutCard;

