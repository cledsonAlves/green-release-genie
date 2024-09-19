import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Janeiro', value: 400 },
  { name: 'Fevereiro', value: 300 },
  { name: 'Março', value: 600 },
  { name: 'Abril', value: 800 },
  { name: 'Maio', value: 500 },
];

const MonthlyMeasuresGraph = () => {
  return (
    <div className="w-full h-64 mt-8">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#4ade80" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyMeasuresGraph;