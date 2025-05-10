import React from 'react';

export default function KPI({ label, value, unit, change, changeType }) {
  return (
    <div className="border p-4 rounded shadow">
      <h2>{label}</h2>
      <p>{value} {unit}</p>
      {change && <p className={changeType === 'positive' ? 'text-green-500' : 'text-red-500'}>{change}</p>}
    </div>
  );
}
