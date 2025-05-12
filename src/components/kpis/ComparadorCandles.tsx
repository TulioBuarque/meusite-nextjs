'use client'

import { useTimeframeStore } from '@/store/useTimeframeStore'

const mockCandleData: Record<string, { candle30: number; candle1h: number }> = {
  '1M': { candle30: 4, candle1h: 3 },
  '5M': { candle30: 8, candle1h: 7 },
  '15M': { candle30: 12, candle1h: 10 },
  '30M': { candle30: 18, candle1h: 17 },
  '1H': { candle30: 25, candle1h: 24 },
  '4H': { candle30: 28, candle1h: 35 },
  'D': { candle30: 30, candle1h: 42 },
}

export function ComparadorCandles() {
  const timeframe = useTimeframeStore((state) => state.selectedTimeframe)
  const { candle30, candle1h } = mockCandleData[timeframe]
  const destaque = candle30 > candle1h

  return (
    <div className="mb-4 bg-gray-800 p-4 rounded-xl shadow-md">
      <p
        className="font-semibold mb-1 text-center"
        title="Compara a movimentação (pips) dos candles de 30 minutos e 1 hora. Útil para detectar rompimentos recentes."
      >
        🕯️ Comparador de Candles — {timeframe}
      </p>
      <div className="flex justify-between text-sm text-gray-300 px-2">
        <div>Candle 30min: <span className="text-white">{candle30} pips</span></div>
        <div>Candle 1h: <span className="text-white">{candle1h} pips</span></div>
      </div>
      {destaque && (
        <p className="text-red-400 mt-2 text-sm text-center">🔥 Rompimento detectado!</p>
      )}
    </div>
  )
}
