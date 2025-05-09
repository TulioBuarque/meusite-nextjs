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
  const height = 400

  const position = (value: number) =>
    ((value - min) / (max - min)) * height

  const textStyle = "absolute left-1/2 -translate-x-1/2 text-sm font-semibold drop-shadow-lg"

  return (
    <div className="flex flex-col items-center my-6 w-full">
      <h3 className="text-xl font-bold mb-4">{asset} - {date}</h3>
      <div className="relative bg-gray-700 w-1" style={{ height }}>
        
        {/* Máximo */}
        <div
          className={`${textStyle} text-green-300`}
          style={{ bottom: `${position(max)}px` }}
        >
          ● {max.toFixed(5)} (+{changeFromMax}%)
        </div>

        {/* Atual */}
        <div
          className={`${textStyle} text-white`}
          style={{ bottom: `${position(current)}px` }}
        >
          ● {current.toFixed(5)} ({changeFromOpen}%)
        </div>

        {/* Mínimo */}
        <div
          className={`${textStyle} text-red-400`}
          style={{ bottom: `0px` }}
        >
          ● {min.toFixed(5)} ({changeFromMin}%)
        </div>
      </div>
    </div>
  )
}
