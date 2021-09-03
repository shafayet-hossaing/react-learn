import React from 'react';
import './App.css';
import Clock from './Clock';
import ClockTwo from './ClockTwo';


function App() {
  return (
    <>
      <Clock local="bn-BD"/>
      <ClockTwo local="bn-BD" />
    </>
  );
}

export default App;
