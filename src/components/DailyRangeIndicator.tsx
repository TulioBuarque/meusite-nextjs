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
  const fullHeight = 600

  // Define uma faixa mínima simulada se o range for pequeno
  const safeMin = min
  const safeMax = Math.abs(max - min) < 0.01 ? min + 0.01 : max

  const position = (value: number) => ((value - safeMin) / (safeMax - safeMin)) * fullHeight

  const posMax = fullHeight
  const posCurrent = position(current)
  const posMin = 0

  const labelStyle = "absolute left-1/2 -translate-x-1/2 text-sm font-semibold drop-shadow-lg"

  return (
    <div className="flex flex-col items-center my-6 w-full">
      <h3 className="text-xl font-bold mb-4">{asset} - {date}</h3>
      <div className="relative bg-gray-700 w-1 rounded" style={{ height: fullHeight }}>

        <div className={`${labelStyle} text-green-300`} style={{ bottom: `${posMax}px`, marginBottom: '20px' }}>
          ● {max.toFixed(5)} (+{changeFromMax}%)
        </div>

        <div className={`${labelStyle} text-white`} style={{ bottom: `${posCurrent}px`, marginBottom: '20px' }}>
          ● {current.toFixed(5)} ({changeFromOpen}%)
        </div>

        <div className={`${labelStyle} text-red-400`} style={{ bottom: `${posMin}px`, marginTop: '20px' }}>
          ● {min.toFixed(5)} ({changeFromMin}%)
        </div>
      </div>
    </div>
  )
}
