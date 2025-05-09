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

  const clamp = (val: number, min: number, max: number) => Math.max(min, Math.min(val, max))
  const position = (value: number) => ((value - min) / (max - min)) * height

  const posMax = height
  const posCurrent = clamp(position(current), 40, posMax - 40)
  const posMin = 0

  const textStyle = "absolute left-1/2 -translate-x-1/2 text-sm font-semibold drop-shadow-lg"

  return (
    <div className="flex flex-col items-center my-6 w-full">
      <h3 className="text-xl font-bold mb-4">{asset} - {date}</h3>
      <div className="relative bg-gray-700 w-1" style={{ height }}>

        <div className={`${textStyle} text-green-300`} style={{ bottom: `${posMax}px` }}>
          ● {max.toFixed(5)} (+{changeFromMax}%)
        </div>

        <div className={`${textStyle} text-white`} style={{ bottom: `${posCurrent}px` }}>
          ● {current.toFixed(5)} ({changeFromOpen}%)
        </div>

        <div className={`${textStyle} text-red-400`} style={{ bottom: `${posMin}px` }}>
          ● {min.toFixed(5)} ({changeFromMin}%)
        </div>
      </div>
    </div>
  )
}
