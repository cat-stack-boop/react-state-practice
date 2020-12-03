import React, { useState} from 'react';
import Button from './Components/Button/Button.js';
import Display from './Components/Display/Display.js';



const App = () => {
  const [ counter, setCounter] = useState(0);

  const setCount = () => setCounter(counter + 1);
  //const decreaseCount = () => setCounter(counter - 1);


  return (
    <>
      <Button onClick={setCount} text='click me'></Button>
      <Display counter={counter}/>
    </>
  );
}

export default App;
