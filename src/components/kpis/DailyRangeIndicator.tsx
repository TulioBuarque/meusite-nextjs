'use client'

import { useTimeframeStore, Timeframe } from '@/store/useTimeframeStore'

// Timeframes válidos
const VALID_TIMEFRAMES: Timeframe[] = ['1M', '5M', '15M', '30M', '1H', '4H', 'D']

const mockPriceData = {
  '1M': { asset: 'EUR/USD', date: '2025-05-12', min: 1.1000, max: 1.1010, current: 1.1005, changeFromOpen: 0.05, changeFromMin: 0.50, changeFromMax: -0.50 },
  '5M': { asset: 'EUR/USD', date: '2025-05-12', min: 1.1000, max: 1.1020, current: 1.1012, changeFromOpen: 0.12, changeFromMin: 1.20, changeFromMax: -0.80 },
  '15M': { asset: 'EUR/USD', date: '2025-05-12', min: 1.0990, max: 1.1030, current: 1.1015, changeFromOpen: 0.15, changeFromMin: 2.50, changeFromMax: -1.50 },
  '30M': { asset: 'EUR/USD', date: '2025-05-12', min: 1.0985, max: 1.1045, current: 1.1028, changeFromOpen: 0.28, changeFromMin: 4.30, changeFromMax: -1.70 },
  '1H': { asset: 'EUR/USD', date: '2025-05-12', min: 1.0970, max: 1.1050, current: 1.1042, changeFromOpen: 0.42, changeFromMin: 7.20, changeFromMax: -0.80 },
  '4H': { asset: 'EUR/USD', date: '2025-05-12', min: 1.0950, max: 1.1060, current: 1.1045, changeFromOpen: 0.45, changeFromMin: 9.50, changeFromMax: -1.50 },
  'D': { asset: 'EUR/USD', date: '2025-05-12', min: 1.0940, max: 1.1070, current: 1.1050, changeFromOpen: 0.50, changeFromMin: 11.00, changeFromMax: -2.00 },
}

export function DailyRangeIndicator() {
  const timeframe = useTimeframeStore((state) => state.selectedTimeframe)

  // Validação de segurança
  if (!VALID_TIMEFRAMES.includes(timeframe) || !mockPriceData[timeframe]) {
    console.warn(`Timeframe inválido detectado: ${timeframe}`)
    return <p className="text-center text-red-500">Erro: Timeframe inválido selecionado.</p>
  }

  const { asset, date, min, max, current, changeFromOpen, changeFromMin, changeFromMax } = mockPriceData[timeframe]

  const safeMin = min
  const safeMax = Math.abs(max - min) < 0.01 ? min + 0.01 : max

  const position = (value: number) => ((value - safeMin) / (safeMax - safeMin)) * 80 + 10

  const points = [
    { value: max, change: changeFromMax, label: 'text-green-300' },
    { value: current, change: changeFromOpen, label: 'text-white' },
    { value: min, change: changeFromMin, label: 'text-red-400' },
  ].sort((a, b) => position(b.value) - position(a.value))

  return (
    <div className="flex flex-col items-center my-6 w-full max-w-xs mx-auto bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-700">
      <h3 className="text-lg font-semibold mb-2 text-center">{asset} - {date} ({timeframe})</h3>
      <div className="relative bg-gray-700 w-4 rounded-full transition-all duration-500" style={{ height: '60vh', maxHeight: '80vh' }}>
        {points.map((p, index) => (
          <div key={index}
            className={`absolute left-1/2 -translate-x-1/2 text-sm font-semibold drop-shadow-lg ${p.label}`}
            style={{ bottom: `${position(p.value)}%`, marginBottom: '4px' }}
          >
            ● {p.value.toFixed(5)} ({p.change > 0 ? '+' : ''}{p.change}%)
          </div>
        ))}
      </div>
    </div>
  )
}
