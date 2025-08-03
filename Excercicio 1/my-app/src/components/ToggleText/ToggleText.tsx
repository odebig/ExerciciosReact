import React, { useState } from 'react';
import './ToggleText.css';

export function ToggleText() {
  const [showFirstText, setShowFirstText] = useState(true);

  const handleToggle = () => {
    setShowFirstText(prev => !prev);
  };

  return (
    <div className="toggle-container">
      <h2>{showFirstText ? 'Hello, World!' : 'Goodbye, World!'}</h2>
      <button onClick={handleToggle}>Toggle Text</button>
    </div>
  );
}
