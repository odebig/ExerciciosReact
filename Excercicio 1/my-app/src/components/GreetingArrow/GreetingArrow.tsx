import React from 'react';

export const GreetingArrow: React.FC = () => {
  const style: React.CSSProperties = {
    color: 'green',
    fontSize: '24px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    textAlign: 'center',
  };

  return (
    <div style={style}>
      Hello, welcome to the app! (Arrow Function Component)
    </div>
  );
};
