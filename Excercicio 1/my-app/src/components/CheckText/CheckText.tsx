import React, { useState } from 'react';
import './CheckText.css';

export function CheckText() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(prevState => !prevState);
  };

  return (
    <div className="checktext-container">
      <input
        type="checkbox"
        id="toggleText"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="toggleText">Marque para riscar o texto</label>
      <p className={isChecked ? 'checked' : ''}>
        Este é um texto que pode ser riscado.
      </p>
    </div>
  );
}
