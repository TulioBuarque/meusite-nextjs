'use client'

import { useTimeframeStore } from '@/store/useTimeframeStore'

const mockPriceData: Record<string, { asset: string; date: string; min: number; max: number; current: number; changeFromOpen: number; changeFromMin: number; changeFromMax: number }> = {
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
  const { asset, date, min, max, current, changeFromOpen, changeFromMin, changeFromMax } = mockPriceData[timeframe]

  const safeMin = min
  const safeMax = Math.abs(max - min) < 0.01 ? min + 0.01 : max

  const position = (value: number) => {
    const raw = ((value - safeMin) / (safeMax - safeMin)) * 80 + 10
    return Math.max(10, Math.min(raw, 90))
  }

  const posMax = 90
  const posCurrent = position(current)
  const posMin = 10

  const labelStyle = "absolute left-1/2 -translate-x-1/2 text-sm font-semibold drop-shadow-lg"

  return (
    <div className="flex flex-col items-center my-6 w-full max-w-xs mx-auto bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-700">
      <h3 className="text-lg font-semibold mb-2 text-center">{asset} - {date} ({timeframe})</h3>
      <div className="relative bg-gray-700 w-4 rounded-full transition-all duration-500" style={{ height: '60vh', maxHeight: '80vh' }}>
        <div className={`${labelStyle} text-green-300`} style={{ bottom: `${posMax}%`, marginBottom: '12px' }}>
          ● {max.toFixed(5)} (+{changeFromMax}%)
        </div>
        <div className={`${labelStyle} text-white`} style={{ bottom: `${posCurrent}%`, marginBottom: '12px' }}>
          ● {current.toFixed(5)} ({changeFromOpen}%)
        </div>
        <div className={`${labelStyle} text-red-400`} style={{ bottom: `${posMin}%`, marginTop: '12px' }}>
          ● {min.toFixed(5)} ({changeFromMin}%)
        </div>
      </div>
    </div>
  )
}
