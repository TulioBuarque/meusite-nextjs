'use client'

import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const mockData = {
  title: "FED sinaliza possível aumento de juros",
  sentiment: "Positivo",
  points: {
    '1M': [{ time: '1M', price: 1.1000 }],
    '5M': [
      { time: '1M', price: 1.1000 },
      { time: '5M', price: 1.1012 },
    ],
    '15M': [
      { time: '1M', price: 1.1000 },
      { time: '5M', price: 1.1012 },
      { time: '15M', price: 1.1005 },
    ],
    '30M': [
      { time: '1M', price: 1.1000 },
      { time: '5M', price: 1.1012 },
      { time: '15M', price: 1.1005 },
      { time: '30M', price: 1.1020 },
    ],
    '1H': [
      { time: '1M', price: 1.1000 },
      { time: '5M', price: 1.1012 },
      { time: '15M', price: 1.1005 },
      { time: '30M', price: 1.1020 },
      { time: '1H', price: 1.1030 },
    ],
    '4H': [
      { time: '1M', price: 1.1000 },
      { time: '5M', price: 1.1012 },
      { time: '15M', price: 1.1005 },
      { time: '30M', price: 1.1020 },
      { time: '1H', price: 1.1030 },
      { time: '4H', price: 1.1002 },
    ],
    'D': [
      { time: '1M', price: 1.1000 },
      { time: '5M', price: 1.1012 },
      { time: '15M', price: 1.1005 },
      { time: '30M', price: 1.1020 },
      { time: '1H', price: 1.1030 },
      { time: '4H', price: 1.1002 },
      { time: 'D', price: 1.0985 },
    ]
  }
}

const periods = ['1M', '5M', '15M', '30M', '1H', '4H', 'D']

export function NewsImpactKPI() {
  const [selectedPeriod, setSelectedPeriod] = useState('D')
  const data = mockData.points[selectedPeriod]

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-xl w-full">
      <h2 className="text-xl font-bold mb-2 text-white">🧠 News Impact</h2>
      <p className="text-sm text-gray-300 mb-1">{mockData.title}</p>
      <p className="text-sm text-green-400 mb-4">Sentimento AI: {mockData.sentiment}</p>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="time" stroke="#ccc" />
          <YAxis domain={['auto', 'auto']} stroke="#ccc" />
          <Tooltip formatter={(value) => value.toFixed(5)} />
          <Line type="monotone" dataKey="price" stroke="#10b981" dot={{ r: 6 }} activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>

      <div className="flex justify-center gap-2 mt-4 flex-wrap">
        {periods.map((period) => (
          <button
            key={period}
            onClick={() => setSelectedPeriod(period)}
            className={`px-3 py-1 rounded text-sm font-medium border transition-all ${
              selectedPeriod === period
                ? 'bg-green-500 text-white border-green-600'
                : 'bg-gray-700 text-gray-200 border-gray-600'
            }`}
          >
            {period}
          </button>
        ))}
      </div>
    </div>
  )
}
