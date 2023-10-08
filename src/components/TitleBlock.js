import React, { useState, useEffect } from 'react';
import titleImage from '../../src/img/Rectangle1.png';
import Modal from './../components/Modal.js';


const TitleBlock = () => {
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
    <section className='TitleContent'>
      <div className='left'>
      <h1>Handyman services</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
        <div className='btns'>
      <button className='submitbtn' onClick={handleHelpMeClick}>Help me</button>
      {isModalOpen && <Modal onClose={closeModal} />}
      <button className='HelpmeTransparent' onClick={handleHelpMeClick}>Help me</button>
        </div>
      </div>
      <div className='right'>
      <img className='workerimg' src={titleImage} alt="Title Image" />
      </div>
    </section>
  );
};

export default TitleBlock;