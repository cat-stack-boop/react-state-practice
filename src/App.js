import React, { useState} from 'react';
import Button from './Components/Button/Button.js';
import Display from './Components/Display/Display.js';
//import { Grid } from '@material-ui/core';
import './App.css';


const App = () => {
  const [ counter, setCounter] = useState(0);
  

  const setCount = () => setCounter(counter + 1)
  const decreaseCount = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
   
    
   <div className="App">
    <h1 >React Counter </h1>
      <Display counter={counter}/>
      <Button handleClick={setCount} text='+'/>
      <Button handleClick={decreaseCount} text='-'/>
      <Button handleClick={setToZero} text='Make me Zero'/>
    </div >
      
   
  );
}

export default App;
