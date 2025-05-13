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
  const { asset, date, min, max, current, changeFromOpen } = mockPriceData[timeframe]

  const progress = ((current - min) / (max - min)) * 100

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-center">{asset} - {date} ({timeframe})</h3>
      <p className="text-center text-sm text-gray-400">
        Min: {min.toFixed(5)} | Max: {max.toFixed(5)} | Atual: {current.toFixed(5)} ({changeFromOpen > 0 ? '+' : ''}{changeFromOpen}%)
      </p>
      <div className="relative w-full bg-gray-700 rounded-full h-4">
        <div
          className="bg-green-500 h-4 rounded-full transition-all"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  )
}
