'use client'

import { useTimeframeStore } from '@/store/useTimeframeStore'
import { ArrowUpRight, ArrowDownRight } from 'lucide-react'

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
  const diff = Math.abs(candle30 - candle1h)
  const isRompimento = candle30 > candle1h

  return (
    <div className="mb-4 bg-gray-800 p-4 rounded-xl shadow-md space-y-2">
      <p
        className="font-semibold text-center"
        title="Compara a movimentação (pips) dos candles de 30 minutos e 1 hora. Útil para detectar rompimentos recentes."
      >
        🕯️ Comparador de Candles — {timeframe}
      </p>

      <div className="flex justify-between text-sm text-gray-300 px-2">
        <div className={isRompimento ? 'font-bold text-white' : 'text-gray-300'}>
          30min: <span className="text-white">{candle30} pips</span>
        </div>
        <div className={!isRompimento ? 'font-bold text-white' : 'text-gray-300'}>
          1h: <span className="text-white">{candle1h} pips</span>
        </div>
      </div>

      <div className="text-center mt-2">
        {isRompimento ? (
          <p className="text-red-400 text-sm flex justify-center items-center gap-2">
            <ArrowUpRight className="w-4 h-4" />
            Rompimento detectado (+{diff} pips)
          </p>
        ) : (
          <p className="text-green-400 text-sm flex justify-center items-center gap-2">
            <ArrowDownRight className="w-4 h-4" />
            Estabilidade ou retração (-{diff} pips)
          </p>
        )}
      </div>
    </div>
  )
}
