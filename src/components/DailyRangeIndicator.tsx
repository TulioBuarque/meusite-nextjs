// src/components/DailyRangeIndicator.tsx
'use client'

type Props = {
  asset: string
  date: string
  min: number
  max: number
  current: number
  changeFromOpen: number
  changeFromMin: number
  changeFromMax: number
}

export function DailyRangeIndicator({
  asset,
  date,
  min,
  max,
  current,
  changeFromOpen,
  changeFromMin,
  changeFromMax,
}: Props) {
  const range = max - min
  const toPercent = (value: number) => ((max - value) / range) * 100

  return (
    <div className="mb-6 text-sm">
      <p className="mb-2 font-semibold">{asset} - {date}</p>
      <div className="relative h-48 w-1 bg-gray-500 mx-auto rounded">
        {/* Max */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{ top: '0%' }}
          title={`Máximo: ${max.toFixed(5)} (+${changeFromMax}%)`}
        >
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <div className="text-xs text-center text-gray-300 mt-1">↑ {max.toFixed(5)}</div>
        </div>

        {/* Current */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{ top: `${toPercent(current)}%` }}
          title={`Atual: ${current.toFixed(5)} (${changeFromOpen > 0 ? '+' : ''}${changeFromOpen}%)`}
        >
          <div className={`w-3 h-3 rounded-full ${changeFromOpen >= 0 ? 'bg-green-400' : 'bg-red-400'}`}></div>
          <div className="text-xs text-center mt-1 text-white">
            {current.toFixed(5)} ({changeFromOpen > 0 ? '+' : ''}{changeFromOpen}%)
          </div>
        </div>

        {/* Min */}
        <div
          className="absolute left-1/2 -translate-x-1/2 bottom-0"
          title={`Mínimo: ${min.toFixed(5)} (${changeFromMin}%)`}
        >
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <div className="text-xs text-center text-gray-300 mt-1">↓ {min.toFixed(5)}</div>
        </div>
      </div>
    </div>
  )
}
