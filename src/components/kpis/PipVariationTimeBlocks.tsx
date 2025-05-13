'use client';

import { useTimeframeStore } from '@/store/useTimeframeStore';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { format, subDays, isWeekend } from 'date-fns';

const generateBusinessDates = (count: number) => {
  const dates = [];
  let date = new Date();
  while (dates.length < count) {
    if (!isWeekend(date)) {
      dates.push(format(date, 'yyyy-MM-dd'));
    }
    date = subDays(date, 1);
  }
  return dates;
};

const generateTimeLabels = (startHour: number, intervalMinutes: number, count: number) => {
  const times = [];
  let hour = startHour, minute = 0;
  for (let i = 0; i < count; i++) {
    times.push(`${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`);
    minute += intervalMinutes;
    if (minute >= 60) { minute %= 60; hour = (hour + 1) % 24; }
  }
  return times;
};

const generateMockData = (startHour: number, intervalMinutes: number, count: number = 10) =>
  generateTimeLabels(startHour, intervalMinutes, count).map(time => ({
    time,
    pips: Math.floor(Math.random() * 20 - 10),
  }));

const mockContinuousData = {
  '1M': generateMockData(9, 1),
  '5M': generateMockData(9, 5),
  '15M': generateMockData(9, 15),
  '30M': generateMockData(9, 30),
  '1H': generateMockData(9, 60),
  '4H': generateMockData(9, 240),
  'D': generateBusinessDates(10).map(date => ({
    time: date,
    pips: Math.floor(Math.random() * 20 - 10),
  })),
};

export function PipVariationTimeBlocks() {
  const timeframe = useTimeframeStore((state) => state.selectedTimeframe);
  const data = mockContinuousData[timeframe] || [];

  return (
    <div className="space-y-4 w-full">
      <h3 className="text-lg font-semibold text-center">📊 Variação de Pips — {timeframe}</h3>
      <
