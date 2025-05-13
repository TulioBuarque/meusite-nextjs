'use client'

import { useTimeframeStore } from '@/store/useTimeframeStore'

const mockPriceData = {
  '1M': { asset: 'EUR/USD', date: '2025-05-12', min: 1.1000, max: 1.1010, current: 1.1005, changeFromOpen: 0.05, changeFromMin: 0.50, changeFromMax: -0.50 },
  // ... demais intervalos como já tem
}

export function DailyRangeIndicator() {
  const timeframe = useTimeframeStore((state) => state.selectedTimeframe)
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
      <h3 className="text-lg font-semibold mb-2 text-center">{asset} - {date} ({timeframe})</
