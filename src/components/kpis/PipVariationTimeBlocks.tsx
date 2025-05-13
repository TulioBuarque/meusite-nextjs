'use client';

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const mockData = [
  { time: '09:00', pips: 5 },
  { time: '09:01', pips: -3 },
  { time: '09:02', pips: 8 },
  { time: '09:03', pips: -2 },
  { time: '09:04', pips: 4 },
];

export function PipVariationTimeBlocks() {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={mockData}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="pips" fill="#3B82F6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
