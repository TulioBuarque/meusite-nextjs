'use client'

import { useTimeframeStore } from '@/store/useTimeframeStore'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const generateMockData = (label: string) =>
  Array.from({ length: 10 }, (_, i) => ({
    time: `${label}-${1000 + i}`,
    pips: Math.floor(Math.random() * 10) + 1,
  }))

const mockContinuousData: Record<string, { time: string; pips: number }[]> = {
  '1M': generateMockData('1M'),
  '5M': generateMockData('5M'),
  '15M': generateMockData('15M'),
  '30M': generateMockData('30M'),
  '1H': generateMockData('1H'),
  '4H': generateMockData('4H'),
  'D': generateMockData('D'),
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
