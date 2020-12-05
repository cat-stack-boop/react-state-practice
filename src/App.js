import React, { useState} from 'react';
import Button from './Components/Button/Button.js';
import Display from './Components/Display/Display.js';
import { Grid } from '@material-ui/core';


const App = () => {
  const [ counter, setCounter] = useState(0);

  const setCount = () => setCounter(counter + 1)
  const decreaseCount = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
   
    
    <Grid>
    <h1 style={{margin:80}}>React Counter </h1>
      <Display counter={counter}/>
      <Button handleClick={setCount} text='+'/>
      <Button handleClick={decreaseCount} text='-'/>
      <Button handleClick={setToZero} text='Make me Zero'/>
    </Grid>
      
   
  );
}

export default App;
