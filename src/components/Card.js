import React, { useState, useEffect } from 'react';
import './../Personcard.css';
import Person from '../../src/img/Person.png';
import Modal from './../components/Modal.js';

const Card = ({ title, content, buttonClass, marginTopStyle}) => {
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

  let buttonLabel = 'Help me';
  let buttonStyle = {};

  if (title === 'Second Card') {
    marginTopStyle = { marginTop: '20%' };
  }

  return (
    <div className="card" style={marginTopStyle ? { marginTop: '7%' } : {}}>
      <img className ='PersonImg' src={Person} alt="Person" />
      <div className='uppertext'>
        <div className="card-header">Handyman</div>
        <div className='and'>&</div>
      </div>
      <div className="card-header2">Moving services</div>
      <div className="card-content">{content}</div>
      <button className={buttonClass} onClick={handleHelpMeClick}>{buttonLabel}</button>
      {isModalOpen && <Modal onClose={closeModal} />}
    </div>
  );
};

export default Card;
