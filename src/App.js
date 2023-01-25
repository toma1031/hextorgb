import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [hex_value, setHexValue] = useState("#fffff");
  
  const hexToRGB = () => {
     const value = parseInt( hex_value.slice(1),16);
     let r = value >> 16 & 0xFF;
     let g = value >> 8 & 0xFF;
     let b = value & 0xFF;
     return `[${r}, ${g}, ${b}]`;
  }

  const handleChange = (e) => {
    setHexValue(e.target.value)
    console.log(e.target.value)
  }

  // console.log(hex_value)
  // console.log(hexToRGB())

    
  useEffect(() => {
      }, []);
    
  return (
    <>
      <h1 className="title">HEX To RGB</h1>
      <div className="color_pikcer_section">
        <input type="color" className="color_pikcer_bar" onChange={handleChange}/>
        <p>{hexToRGB()}</p>
      </div>
    </>
  );
}

export default App;
