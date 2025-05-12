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
  const safeMin = min
  const safeMax = Math.abs(max - min) < 0.01 ? min + 0.01 : max

  const position = (value: number) => {
    const raw = ((value - safeMin) / (safeMax - safeMin)) * 80 + 10
    return Math.max(10, Math.min(raw, 90))
  }

  const posMax = 90
  const posCurrent = position(current)
  const posMin = 10

  const labelStyle = "absolute left-1/2 -translate-x-1/2 text-sm font-semibold drop-shadow-lg"

  return (
    <div className="flex flex-col items-center my-6 w-full">
      <h3 className="text-xl font-bold mb-4">{asset} - {date}</h3>
      <div className="relative bg-gray-700 w-1 rounded" style={{ height: '70vh', maxHeight: '85vh' }}>
        <div className={`${labelStyle} text-green-300`} style={{ bottom: `${posMax}%`, marginBottom: '10px' }}>
          ● {typeof max === 'number' ? max.toFixed(5) : 'N/A'} (+{changeFromMax}%)
        </div>
        <div className={`${labelStyle} text-white`} style={{ bottom: `${posCurrent}%`, marginBottom: '10px' }}>
          ● {typeof current === 'number' ? current.toFixed(5) : 'N/A'} ({changeFromOpen}%)
        </div>
        <div className={`${labelStyle} text-red-400`} style={{ bottom: `${posMin}%`, marginTop: '10px' }}>
          ● {typeof min === 'number' ? min.toFixed(5) : 'N/A'} ({changeFromMin}%)
        </div>
      </div>
    </div>
  )
}
