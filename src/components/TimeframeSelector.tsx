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
          className={`px-3 py-1 rounded-md border ${
            selectedTimeframe === tf
              ? 'bg-green-500 text-white border-green-500'
              : 'bg-gray-800 text-gray-300 border-gray-600'
          }`}
        >
          {tf}
        </button>
      ))}
    </div>
  )
}
