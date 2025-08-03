import React from 'react';

// Definindo o tipo das props
type GreetingProps = {
  name: string;
  age: number;
};

export function GreetingFunction(props: GreetingProps) {
  const style: React.CSSProperties = {
    color: 'blue',
    fontSize: '24px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    textAlign: 'center',
  };

  return (
    <div style={style}>
      Hello, {props.name}! You are {props.age} years old.
    </div>
  );
}
