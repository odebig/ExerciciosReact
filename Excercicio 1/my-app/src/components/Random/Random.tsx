import React, { useState } from 'react';

type RandomProps = {
  items?: string[];
};

export function Random({ items }: RandomProps) {
  const [result, setResult] = useState<string | number>('-');

  const handleRandom = () => {
    if (items && items.length > 0) {
      const randomIndex = Math.floor(Math.random() * items.length);
      setResult(items[randomIndex]);
    } else {
      const randomNumber = Math.floor(Math.random() * 101); // 0 a 100
      setResult(randomNumber);
    }
  };

  return (
    <div className="text-center p-4">
      <h2 className="text-2xl font-bold mb-4">Result: {result}</h2>
      <button
        onClick={handleRandom}
        className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600 transition"
      >
        Generate Random
      </button>
    </div>
  );
}
