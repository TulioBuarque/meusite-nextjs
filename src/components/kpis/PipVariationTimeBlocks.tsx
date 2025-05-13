'use client';

import { useTimeframeStore } from '@/store/useTimeframeStore';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { format, subDays, isWeekend } from 'date-fns';

// Função para gerar as últimas N datas úteis (segunda a sexta)
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

// Gerador de horários simulados
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

// Gerador de dados simulados
const generateMockData = (startHour: number, intervalMinutes: number, count: number = 10) =>
  generateTimeLabels(startHour, intervalMinutes, count).map(time => ({
    time,
    pips: Math.floor(Math.random() * 20 - 10),
  }));

// Aplicação das regras para cada timeframe
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
    <div className="space-y-4 w-full"> {/* ✅ Expandido para largura total */}
      <h3 className="text-lg font-semibold text-center">📊 Variação de Pips — {timeframe}</h3>
      <p className="text-center text-sm text-gray-400">Variações positivas (verde) e negativas (vermelho).</p>

      {data.length > 0 ? (
        <div className="bg-gray-700 rounded-lg p-2">
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="time" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip
                contentStyle={{ backgroundColor: '#333', border: 'none' }}
                labelStyle={{ color: '#fff' }}
                formatter={(value: number) => [`${value} pips`, 'Variação']}
              />
              <Bar dataKey="pips">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.pips >= 0 ? '#10b981' : '#ef4444'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <p className="text-center text-gray-500">Nenhuma variação registrada para {timeframe}.</p>
      )}
    </div>
  );
}
