'use client'

interface Props {
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
  const height = 400 // Dobrado para dar mais destaque visual

  const position = (value: number) =>
    ((value - min) / (max - min)) * height

  return (
    <div className="flex flex-col items-center my-6 w-full">
      <h3 className="text-lg font-semibold mb-2">{asset} - {date}</h3>
      <div className="relative bg-gray-700 w-1" style={{ height }}>
        {/* Máximo */}
        <div
          className="absolute left-1/2 -translate-x-1/2 text-xs text-green-400"
          style={{ bottom: `${position(max)}px` }}
        >
          ● {max.toFixed(5)} (+{changeFromMax}%)
        </div>

        {/* Atual */}
        <div
          className="absolute left-1/2 -translate-x-1/2 text-xs text-white"
          style={{ bottom: `${position(current)}px` }}
        >
          ● {current.toFixed(5)} ({changeFromOpen}%)
        </div>

        {/* Mínimo */}
        <div
          className="absolute left-1/2 -translate-x-1/2 text-xs text-red-400"
          style={{ bottom: `0px` }}
        >
          ● {min.toFixed(5)} ({changeFromMin}%)
        </div>
      </div>
    </div>
  )
}
