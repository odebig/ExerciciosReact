import React from 'react';
import { ListItem } from '../ListItem/ListItem';

type Subject = {
  name: string;
  grade: number;
};

const subjects: Subject[] = [
  { name: 'Mathematics', grade: 85 },
  { name: 'Physics', grade: 92 },
  { name: 'Chemistry', grade: 78 },
  { name: 'History', grade: 88 },
  { name: 'English', grade: 95 },
];

export function ListContainer() {
  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow rounded-md">
      <h2 className="text-xl font-bold mb-4 text-center text-blue-600">Subjects & Grades</h2>
      <ul>
        {subjects.map((subject, idx) => (
          <ListItem key={idx} index={idx + 1} name={subject.name} grade={subject.grade} />
        ))}
      </ul>
    </div>
  );
}
