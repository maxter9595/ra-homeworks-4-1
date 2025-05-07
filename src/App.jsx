import { useState } from 'react';

const DEFAULT_HEX = '#34495e';

function hexToRgb(hex) {
  if (!/^#([0-9a-f]{6})$/i.test(hex)) return null;
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgb(${r}, ${g}, ${b})`;
}

function App() {
  const [hex, setHex] = useState(DEFAULT_HEX);
  const [rgb, setRgb] = useState(hexToRgb(DEFAULT_HEX));
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    const value = e.target.value.trim();
    const rgbValue = hexToRgb(value);
    
    setHex(value);

    if (rgbValue) {
      setRgb(rgbValue);
      setIsValid(true);
    } else {
      setRgb('Ошибка!');
      setIsValid(false);
    }
  };

  return (
    <div
      className="app"
      style={{ backgroundColor: isValid ? (hex || '#fff') : '#ee4b34' }}
    >
      <div className="container">
        <input
          type="text"
          placeholder="#34495e"
          maxLength={7}
          value={hex}
          onChange={handleChange}
        />
        <div className={`output ${isValid ? 'valid' : 'error'}`}>
          {rgb}
        </div>
      </div>
    </div>
  );
}

export default App;
