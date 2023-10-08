import React from 'react';
import './../WorkerCard.css';
import Worker from '../../src/img/worker.png';


const WorkerCard = ({ imageSrc, title }) => {
  return (
    <div className="worker-card">
      <img src={Worker} alt="Worker" />
      <h3>Handyman & Moving services</h3>
    </div>
  );
};

export default WorkerCard;
