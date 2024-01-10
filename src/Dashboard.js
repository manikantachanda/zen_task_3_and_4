import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Dashboard = () => {
  const data = [
    { name: 'Category C', value: 200 },
    { name: 'Category D', value: 150 },
    { name: 'Category C', value: 200 },
    { name: 'Category D', value: 150 },
  ];
  
  return (
    <div className="dashboard-container">
      <h2>Welcome to the Dashboard</h2>
      <BarChart width={600} height={300} layout="vertical" data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis />
        <YAxis  dataKey="name"/>
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>

      {/* Add more components like dropdowns, charts, etc. as needed */}
    </div>
  );
};

export default Dashboard;
