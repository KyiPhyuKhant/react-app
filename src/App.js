import './App.css';
import { useState } from 'react';

function App() {
  // let age = 0;
  const [age, setAge] = useState(1);

  const IncreaseAge = () => {
    setAge(5);
    // age = age + 1;
    // console.log(age);
  };

  return (
    <div className='App'>
      {age}
      <button onClick={IncreaseAge}>Increase age</button>
    </div >
  );
}

export default App;
