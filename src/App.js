import './App.css';
import ColorDisplay from './components/colorDisplay';
import ColorInput from './components/colorInput';
import { useState } from 'react';

function App() {
  const [colorValue, setColorValue] = useState('');
  const [hexValue, setHexValue] = useState('');
  const [isDarkText, setIsDarkText] = useState(true);

  return (
    <div className="App">
      <ColorDisplay
        colorValue={colorValue}
        hexValue={hexValue}
        isDarkText={isDarkText}
      />

      <ColorInput
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
