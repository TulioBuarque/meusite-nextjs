'use client'

import { useTimeframeStore } from '@/store/useTimeframeStore'

const timeframes = ['1M', '5M', '15M', '30M', '1H', '4H', 'D'] as const

export function TimeframeSelector() {
  const selectedTimeframe = useTimeframeStore((state) => state.selectedTimeframe)
  const setTimeframe = useTimeframeStore((state) => state.setTimeframe)

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {timeframes.map((tf) => (
        <button
          key={tf}
          onClick={() => setTimeframe(tf)}
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
