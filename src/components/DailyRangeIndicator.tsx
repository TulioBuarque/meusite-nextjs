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
  const currentPos = ((current - min) / range) * 100

  return (
    <div className="w-full max-w-xs mx-auto text-white">
      <h3 className="text-lg font-semibold mb-1">{asset}</h3>
      <p className="text-sm text-gray-400 mb-4">{date}</p>

      <div className="relative h-48 w-8 mx-auto bg-gray-800 rounded-lg">
        {/* Linha de fundo */}
        <div className="absolute inset-0 flex flex-col justify-between items-center py-1">
          {/* Max */}
          <div className="text-center text-xs text-green-400">
            <div className="font-bold">{max.toFixed(5)}</div>
            <div>+{changeFromMax.toFixed(2)}%</div>
          </div>

          {/* Min */}
          <div className="text-center text-xs text-red-400">
            <div className="font-bold">{min.toFixed(5)}</div>
            <div>{changeFromMin.toFixed(2)}%</div>
          </div>
        </div>

        {/* Preço atual */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-2 border-white"
          style={{ top: `${100 - currentPos}%` }}
          title={`Preço atual: ${current.toFixed(5)} (${changeFromOpen.toFixed(2)}%)`}
        />

        {/* Linha vertical */}
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gray-600 rounded" />
      </div>

      <p className="text-center text-sm mt-4">
        Preço atual: <span className="font-bold">{current.toFixed(5)}</span> ({changeFromOpen > 0 ? '+' : ''}{changeFromOpen.toFixed(2)}%)
      </p>
    </div>
  )
}
