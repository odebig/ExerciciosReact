import React from 'react';

type ListItemProps = {
  index: number;
  name: string;
  grade: number;
};

export function ListItem({ index, name, grade }: ListItemProps) {
  return (
    <li className="border border-gray-300 rounded-md p-2 my-1 bg-gray-50 hover:bg-gray-100 transition">
      {index}. {name} — Grade: {grade}
    </li>
  );
}
