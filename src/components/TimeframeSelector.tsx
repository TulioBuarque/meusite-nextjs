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
          className={`px-3 py-1 text-xs font-medium rounded-md border ${
            selectedTimeframe === tf
              ? 'bg-indigo-600 text-white border-indigo-600 shadow-md'
              : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
          }`}
        >
          {tf}
        </button>
      ))}
    </div>
  )
}
