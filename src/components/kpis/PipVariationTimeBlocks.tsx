'use client'

import { useTimeframeStore } from '@/store/useTimeframeStore'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const mockContinuousData: Record<string, { time: string; pips: number }[]> = {
  '1M': [
    { time: '09:00', pips: 2 },
    { time: '09:01', pips: 3 },
    { time: '09:02', pips: 4 },
    { time: '09:03', pips: 3 },
    { time: '09:04', pips: 5 },
  ],
  '5M': [
    { time: '09:00', pips: 7 },
    { time: '09:05', pips: 9 },
    { time: '09:10', pips: 6 },
    { time: '09:15', pips: 8 },
    { time: '09:20', pips: 10 },
  ],
  '15M': [
    { time: '09:00', pips: 12 },
    { time: '09:15', pips: 15 },
    { time: '09:30', pips: 13 },
    { time: '09:45', pips: 17 },
  ],
  '30M': [
    { time: '09:00', pips: 18 },
    { time: '09:30', pips: 20 },
    { time: '10:00', pips: 22 },
  ],
  '1H': [
    { time: '09:00', pips: 25 },
    { time: '10:00', pips: 27 },
    { time: '11:00', pips: 30 },
  ],
  '4H': [
    { time: '08:00', pips: 28 },
    { time: '12:00', pips: 35 },
    { time: '16:00', pips: 33 },
  ],
  'D': [
    { time: 'Seg', pips: 30 },
    { time: 'Ter', pips: 32 },
    { time: 'Qua', pips: 28 },
    { time: 'Qui', pips: 35 },
    { time: 'Sex', pips: 37 },
  ],
}

export function PipVariationTimeBlocks() {
  const timeframe = useTimeframeStore((state) => state.selectedTimeframe)
  const data = mockContinuousData[timeframe]

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-center">📊 Variação de Pips — {timeframe}</h3>
      <p className="text-center text-sm text-gray-400">
        Evolução contínua da variação de pips no intervalo selecionado.
      </p>
      {data.length > 0 ? (
        <div className="bg-gray-700 rounded-lg p-2">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="time" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip
                contentStyle={{ backgroundColor: '#333', border: 'none' }}
                labelStyle={{ color: '#fff' }}
                formatter={(value: number) => [`${value} pips`, 'Variação']}
              />
              <Bar dataKey="pips" fill="#10b981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <p className="text-center text-gray-500">Nenhuma variação registrada para {timeframe}.</p>
      )}
    </div>
  )
}
