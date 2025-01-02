// src/pages/Dashboard.tsx
import React from 'react';
import SalesOil from '../api/departments/SalesOil';
import FilledOil from '../api/departments/Filled-Oil/FilledOil';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Sales Oil</h2>
      <SalesOil />
      <h2>Filled Oil</h2>
      <FilledOil />
    </div>
  );
};

export default Dashboard;
