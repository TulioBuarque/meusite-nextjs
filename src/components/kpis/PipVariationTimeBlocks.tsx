'use client'

import { useTimeframeStore } from '@/store/useTimeframeStore'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const mockDataMap: Record<string, { time: string; pips: number }[]> = {
  '1M': [{ time: '1M', pips: 3 }],
  '5M': [{ time: '5M', pips: 7 }],
  '15M': [{ time: '15M', pips: 12 }],
  '30M': [{ time: '30M', pips: 9 }],
  '1H': [{ time: '1H', pips: 18 }],
  '4H': [{ time: '4H', pips: 22 }],
  'D': [{ time: 'D', pips: 35 }],
}

export function PipVariationTimeBlocks() {
  const timeframe = useTimeframeStore((state) => state.selectedTimeframe)
  const data = mockDataMap[timeframe]

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-center">📊 Variação de Pips — {timeframe}</h3>
      <p className="text-center text-sm text-gray-400">
        Mostrando a variação registrada no período selecionado.
      </p>
      {data.length > 0 ? (
        <div className="bg-gray-700 rounded-lg p-2">
          <ResponsiveContainer width="100%" height={200}>
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
