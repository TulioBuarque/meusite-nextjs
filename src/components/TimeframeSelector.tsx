'use client'

import { useTimeframeStore, Timeframe } from '@/store/useTimeframeStore'

const VALID_TIMEFRAMES: Timeframe[] = ['1M', '5M', '15M', '30M', '1H', '4H', 'D']

export function TimeframeSelector() {
  const selectedTimeframe = useTimeframeStore((state) => state.selectedTimeframe)
  const setTimeframe = useTimeframeStore((state) => state.setTimeframe)

  const handleSelect = (timeframe: Timeframe) => {
    if (VALID_TIMEFRAMES.includes(timeframe)) {
      setTimeframe(timeframe)
    } else {
      console.warn(`Tentativa de selecionar timeframe inválido: ${timeframe}`)
    }
  }

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {VALID_TIMEFRAMES.map((tf) => (
        <button
          key={tf}
          onClick={() => handleSelect(tf)}
          className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
            selectedTimeframe === tf
              ? 'bg-indigo-600 text-white shadow border border-indigo-600'
              : 'bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200'
          }`}
        >
          {tf}
        </button>
      ))}
    </div>
  )
}
