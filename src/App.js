import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [buttonColor, setbuttonColor] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => setbuttonColor(newButtonColor)}
      >
        Change to {newButtonColor}
      </button>
      <input type='checkbox' />
    </div>
  );
}

export default App;
