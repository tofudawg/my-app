import React from 'react';
import WorkerCard from './../components/WorkerCard.js';

const FiveCardBlock = () => {
  return (
    <section>
      <div className='BlockTitle'>
      <h2>Services</h2>
      <h4>Lorem Ipsum</h4>
      </div>
    <div className='workercards'>
      <WorkerCard />
      <WorkerCard />
      <WorkerCard />
      <WorkerCard />
      <WorkerCard />
    </div>
    </section>
  );
};

export default FiveCardBlock;
