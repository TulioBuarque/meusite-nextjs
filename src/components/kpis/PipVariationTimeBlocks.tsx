'use client';

import { useTimeframeStore } from '@/store/useTimeframeStore';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { format, subDays, isWeekend } from 'date-fns';

// Gera as últimas N datas úteis (segunda a sexta)
const generateBusinessDates = (count: number) => {
  const dates = [];
  let date = new Date();
  while (dates.length < count) {
    if (!isWeekend(date)) {
      dates.push(format(date, 'yyyy-MM-dd'));
    }
    date = subDays(date, 1);
  }
  return dates.reverse();
};

// Gera horários simulados
const generateTimeLabels = (startHour: number, intervalMinutes: number, count: number = 10) => {
  const times = [];
  let hour = startHour, minute = 0;
  for (let i = 0; i < count; i++) {
    times.push(`${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`);
    minute += intervalMinutes;
    if (minute >= 60) {
      minute %= 60;
      hour = (hour + 1) % 24;
    }
  }
  return times;
};

// Gera dados simulados para todos os timeframes
const generateMockData = (startHour: number, intervalMinutes: number, count: number = 10) =>
  generateTimeLabels(startHour, intervalMinutes, count).map((time) => ({
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
  'D': generateBusinessDates(10).map((date) => ({
    time: date,
    pips: Math.floor(Math.random() * 20 - 10),
  })),
};

export function PipVariationTimeBlocks() {
  const timeframe = useTimeframeStore((state) => state.selectedTimeframe);
  const data = mockContinuousData[timeframe] || [];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const value = payload[0].value;
      const isPositive = value >= 0;

      return (
        <div className="bg-white p-3 border border-slate-200 shadow-lg rounded-md">
          <p className="text-slate-500 text-xs">{`Time: ${label}`}</p>
          <p className={`font-medium ${isPositive ? 'text-emerald-600' : 'text-rose-600'}`}>{`${value} pips`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-4 w-full">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-slate-700">Pip Variation — {timeframe}</h3>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-sm bg-emerald-500"></div>
            <span className="text-xs text-slate-500">Positive</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-sm bg-rose-500"></div>
            <span className="text-xs text-slate-500">Negative</span>
          </div>
        </div>
      </div>

      {data.length > 0 ? (
        <div className="bg-white rounded-lg p-1 shadow-md border border-slate-200">
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="time" stroke="#64748b" fontSize={12} tickMargin={10} />
              <YAxis stroke="#64748b" fontSize={12} tickMargin={10} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="pips" radius={[4, 4, 0, 0]}>
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.pips >= 0 ? '#10b981' : '#e11d48'}
                    fillOpacity={0.8}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <div className="flex items-center justify-center h-64 bg-slate-50 rounded-lg border border-slate-200">
          <p className="text-slate-500">
            Nenhuma variação registrada para {timeframe}.
          </p>
        </div>
      )}
    </div>
  );
}
