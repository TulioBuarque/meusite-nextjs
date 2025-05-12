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
  const selectedTimeframe = useTimeframeStore((state) => state.selectedTimeframe)
  const data = mockDataMap[selectedTimeframe]

  return (
    <div className="w-full h-72 bg-gray-800 rounded-xl p-4 shadow-md">
      <h3 className="text-lg font-semibold mb-4 text-center">
        📊 Variação de Pips — {selectedTimeframe}
      </h3>
      <ResponsiveContainer width="100%" height="100%">
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
  )
}
