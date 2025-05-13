'use client'

import { useTimeframeStore } from '@/store/useTimeframeStore'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

// Utilitário para gerar horários simulados
const generateTimeLabels = (startHour: number, intervalMinutes: number, count: number) => {
  const times = []
  let currentHour = startHour
  let currentMinute = 0

  for (let i = 0; i < count; i++) {
    const hourStr = String(currentHour).padStart(2, '0')
    const minuteStr = String(currentMinute).padStart(2, '0')
    times.push(`${hourStr}:${minuteStr}`)

    currentMinute += intervalMinutes
    if (currentMinute >= 60) {
      currentMinute = currentMinute % 60
      currentHour = (currentHour + 1) % 24
    }
  }

  return times
}

const generateMockData = (label: string, startHour: number, intervalMinutes: number) =>
  generateTimeLabels(startHour, intervalMinutes, 10).map(time => ({
    time,
    pips: Math.floor(Math.random() * 10) + 1,
  }))

const mockContinuousData: Record<string, { time: string; pips: number }[]> = {
  '1M': generateMockData('1M', 9, 1),    // 1 minuto de intervalo
  '5M': generateMockData('5M', 9, 5),    // 5 minutos de intervalo
  '15M': generateMockData('15M', 9, 15), // 15 minutos de intervalo
  '30M': generateMockData('30M', 9, 30), // 30 minutos de intervalo
  '1H': generateMockData('1H', 9, 60),   // 1 hora de intervalo
  '4H': generateMockData('4H', 0, 240),  // 4 horas de intervalo
  'D': generateMockData('D', 0, 1440),   // 1 dia de intervalo
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
