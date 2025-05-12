'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface Props {
  data: { time: string; pips: number }[]
}

export function PipVariationTimeBlocks({ data }: Props) {
  return (
    <div className="w-full h-72 bg-gray-800 rounded-xl p-4 shadow-md">
      <h3 className="text-lg font-semibold mb-4 text-center">📊 Variação de Pips por Intervalo</h3>
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
