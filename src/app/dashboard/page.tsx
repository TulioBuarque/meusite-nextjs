'use client'

import { ComparadorCandles } from '@/components/kpis/ComparadorCandles'
import { DailyRangeIndicator } from '@/components/kpis/DailyRangeIndicator'
import { CardAlerta } from '@/components/kpis/CardAlerta'
import { PipVariationTimeBlocks } from '@/components/kpis/PipVariationTimeBlocks'

export default function DashboardPage() {
  const mockData = [
    { time: '1M', pips: 3 },
    { time: '5M', pips: 7 },
    { time: '15M', pips: 12 },
    { time: '30M', pips: 9 },
    { time: '1H', pips: 18 },
    { time: '4H', pips: 22 },
    { time: 'D', pips: 35 },
  ]

  return (
    <main className="min-h-screen bg-gray-900 text-white p-6 space-y-8">
      <h1 className="text-3xl font-bold mb-6">📊 ForexBlocks Dashboard</h1>

      <ComparadorCandles candle30={30} candle1h={21} />
      <DailyRangeIndicator range={48} />
      <CardAlerta alerta="Exemplo de alerta exibido no dashboard" />
      <PipVariationTimeBlocks data={mockData} />
    </main>
  )
}
