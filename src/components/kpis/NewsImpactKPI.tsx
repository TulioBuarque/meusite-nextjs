'use client'

import { useTimeframeStore } from '@/store/useTimeframeStore'

const mockImpactData: Record<string, { change: number; sentiment: 'Positivo' | 'Negativo' | 'Neutro' }> = {
  '1M': { change: 0.02, sentiment: 'Neutro' },
  '5M': { change: 0.12, sentiment: 'Positivo' },
  '15M': { change: -0.18, sentiment: 'Negativo' },
  '30M': { change: -0.05, sentiment: 'Neutro' },
  '1H': { change: 0.20, sentiment: 'Positivo' },
  '4H': { change: 0.08, sentiment: 'Neutro' },
  'D': { change: -0.10, sentiment: 'Negativo' },
}

export function NewsImpactKPI() {
  const timeframe = useTimeframeStore((state) => state.selectedTimeframe)
  const { change, sentiment } = mockImpactData[timeframe]

  return (
    <div className="bg-gray-800 rounded-xl p-4 shadow-md w-full">
      <h3 className="text-lg font-semibold mb-2 text-center">📰 Impacto de Notícias — {timeframe}</h3>

      <p className="text-center text-sm text-gray-400 mb-2">
        Notícia: <span className="text-white">"FED sinaliza possível aumento de juros"</span>
      </p>

      <div className="flex flex-col items-center gap-1">
        <p className="text-xl font-bold">
          Variação após {timeframe}: {change > 0 ? '+' : ''}
          {(change * 100).toFixed(2)}%
        </p>
        <p className="text-sm text-gray-300">Sentimento: <span className="font-semibold">{sentiment}</span></p>
      </div>
    </div>
  )
}
