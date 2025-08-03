import React, { useState, useEffect } from 'react';

export function Countdown() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    console.log(`Button clicked. Current count: ${count}`);
  }, [count]); // Executa sempre que o count mudar

  const handleClick = () => {
    if (count > 0) {
      setCount(prev => prev - 1);
    }
  };

  return (
    <div className="text-center p-4">
      <h2 className="text-2xl font-bold mb-4">Countdown: {count}</h2>
      <button
        onClick={handleClick}
        disabled={count === 0}
        className={`px-4 py-2 rounded bg-blue-500 text-white ${
          count === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
        }`}
      >
        Decrease
      </button>
    </div>
  );
}
