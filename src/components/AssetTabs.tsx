interface DailyRangeIndicatorProps {
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
}: DailyRangeIndicatorProps) {
  const height = 400 // aumentamos para melhor leitura
  const currentPosition = ((current - min) / (max - min)) * height
  const maxPosition = 0
  const minPosition = height

  return (
    <div className="flex flex-col items-center justify-center w-full py-6">
      <div className="text-sm mb-2 text-gray-400">
        {asset} — {date}
      </div>
      <div className="relative h-[400px] w-2 bg-gray-600 rounded-full">
        {/* Linha vertical */}
        {/* Bolinha do preço máximo */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-300 rounded-full border border-white"
          style={{ top: `${maxPosition}px` }}
          title={`Máximo: ${max} (${changeFromMax > 0 ? '+' : ''}${changeFromMax}%)`}
        />
        {/* Bolinha do preço atual */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-green-400 rounded-full border border-white"
          style={{ top: `${currentPosition}px` }}
          title={`Atual: ${current} (${changeFromOpen > 0 ? '+' : ''}${changeFromOpen}%)`}
        />
        {/* Bolinha do preço mínimo */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-300 rounded-full border border-white"
          style={{ top: `${minPosition}px` }}
          title={`Mínimo: ${min} (${changeFromMin > 0 ? '+' : ''}${changeFromMin}%)`}
        />
      </div>
    </div>
  )
}
