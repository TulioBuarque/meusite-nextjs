'use client'

const mockPriceData = {
  asset: 'EUR/USD',
  date: '2025-05-12',
  min: 1.0940,
  max: 1.1070,
  current: 1.1050,
  changeFromOpen: 0.50,
  changeFromMin: 11.00,
  changeFromMax: -2.00,
}

export function DailyRangeIndicator() {
  const { asset, date, min, max, current, changeFromOpen, changeFromMin, changeFromMax } = mockPriceData

  const safeMin = min
  const safeMax = Math.abs(max - min) < 0.01 ? min + 0.01 : max

  const position = (value: number) => ((value - safeMin) / (safeMax - safeMin)) * 80 + 10

  const points = [
    { value: max, change: changeFromMax, label: 'text-green-300' },
    { value: current, change: changeFromOpen, label: 'text-white' },
    { value: min, change: changeFromMin, label: 'text-red-400' },
  ].sort((a, b) => position(b.value) - position(a.value))

  return (
    <div className="flex flex-col items-center my-6 w-full max-w-xs mx-auto bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-700">
      <h3 className="text-lg font-semibold mb-2 text-center">{asset} - {date}</h3>
      <div className="relative bg-gray-700 w-4 rounded-full transition-all duration-500" style={{ height: '45vh', maxHeight: '60vh' }}>
        {points.map((p, index) => (
          <div key={index}
            className={`absolute left-1/2 -translate-x-1/2 text-sm font-semibold drop-shadow-lg ${p.label}`}
            style={{ bottom: `${position(p.value)}%`, marginBottom: '4px' }}
          >
            ● {p.value.toFixed(5)} ({p.change > 0 ? '+' : ''}{p.change}%)
          </div>
        ))}
      </div>
    </div>
  )
}
