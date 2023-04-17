import './App.css';
import { useState } from 'react';

function App() {
  // const [textColor, setTextColor] = useState("black");

  // return (
  //   <div className='App'>
  //     <button
  //       onClick={() => {
  //         setTextColor(textColor === "black" ? "red" : "black");
  //       }}
  //     >
  //       Show/Hide
  //     </button>
  //     <h1 style={{ color: textColor }}> Hi My name is kldfhkaldfh</h1>
  //   </div >
  // );


  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  const setToZero = () => {
    setCount(0);
  };

  return (
    <div className='App' style={{ background: '#f0f0f0', padding: '20px' }}>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={setToZero}>Set to Zero</button>

  <p style={{ fontSize: '20px' }}>{count}</p>
    </div >
  );
}

export default App;
