import './App.css';
import { useState } from 'react';

function App() {
  const [buttonColor, setbuttonColor] = useState('red');
  const [disabled, setDisabled] = useState(false);
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div>
      <button
        style={{ backgroundColor: disabled === true ? 'gray' : buttonColor }}
        onClick={() => setbuttonColor(newButtonColor)}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <input
        type='checkbox'
        id='disable-button-checkbox'
        defaultChecked={disabled}
        aria-checked={disabled}
        onClick={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor='disable-button-checkbox'>Disable button</label>
    </div>
  );
}

export default App;
