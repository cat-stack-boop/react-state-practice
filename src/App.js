import React, { useState} from 'react';
import Button from './Components/Button/Button.js';
import Display from './Components/Display/Display.js';



const App = () => {
  const [ counter, setCounter] = useState(0);

  const setCount = () => setCounter(counter + 1)
  const decreaseCount = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <>
      <Display counter={counter}/>
      <Button handleClick={setCount} text='+'/>
      <Button handleClick={decreaseCount} text='-'/>
      <Button handleClick={setToZero} text='Make me Zero'/>
      
    </>
  );
}

export default App;
