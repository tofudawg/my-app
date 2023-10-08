import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TitleBlock from './components/TitleBlock';
import CardBlock from './components/CardBlock';
import TextBlock from './components/TextBlock';
import FiveCardBlock from './components/FiveCardBlock';
import FormBlock from './components/FormBlock';

const App = () => {
  return (
    <div>
      <div className='HeaderTitle'>
      <Header />
      <TitleBlock />
      </div>
      <CardBlock />
      <div className='About'>
      <TextBlock />
      </div>
      <FiveCardBlock />
      <FormBlock />
    </div>
  );
};

export default App;
