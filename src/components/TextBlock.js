import React, { useState, useEffect } from 'react';
import Boxes from '../../src/img/boxes.png';
import AboutCard from './../components/AboutCard.js';
import './../TextBlock.css';
import Modal from './../components/Modal.js';
import { ReactComponent as Image1 } from '../../src/img/1.svg';
import { ReactComponent as Image2 } from '../../src/img/2.svg'; 
import { ReactComponent as Image3 } from '../../src/img/3.svg';
import { ReactComponent as Image4 } from '../../src/img/4.svg'; 

const TextBlock = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleHelpMeClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter' && event.target.textContent.toLowerCase() === 'help me') {
        setIsModalOpen(true);
      }
    };

    document.addEventListener('keypress', handleKeyPress);
    
    return () => {
      document.removeEventListener('keypress', handleKeyPress);
    };
  }, []);
  return (
    <section>
      <div className='BlockTitle'>
        <h2>About US</h2>
        <h4>Lorem Ipsum is simply</h4>
      </div>
      <div className='AboutContainer'>
        <div className='AboutLeft'>
          <img className='AboutLeftImg' src={Boxes} alt="Boxes" />
        </div>
        <div className='AboutRight'>
          <div className='Points'>
            <div className='leftcolumn'>
              <AboutCard svg={<Image1 />} />
              <AboutCard svg={<Image2 />} />
              <div className='btns'>
              <button className='submitbtn' onClick={handleHelpMeClick}>Help me</button>
              {isModalOpen && <Modal onClose={closeModal} />}
              <button className='more' onClick={handleHelpMeClick}>More information</button>
              </div>
            </div>
            <div className='rightcolumn'>
              <AboutCard svg={<Image3 />} />
              <AboutCard svg={<Image4 />} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextBlock;