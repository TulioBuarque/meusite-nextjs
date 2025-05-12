'use client'

import { TimeframeSelector } from '@/components/TimeframeSelector'
import { ComparadorCandles } from '@/components/kpis/ComparadorCandles'
import { DailyRangeIndicator } from '@/components/kpis/DailyRangeIndicator'
import { CardAlerta } from '@/components/kpis/CardAlerta'
import { NewsImpactKPI } from '@/components/kpis/NewsImpactKPI'
import { PipVariationTimeBlocks } from '@/components/kpis/PipVariationTimeBlocks'

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-6 space-y-8">
      <h1 className="text-3xl font-bold mb-6">📊 ForexBlocks Dashboard</h1>

      <TimeframeSelector />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-gray-800 rounded-xl p-4 shadow-md">
          <ComparadorCandles />
        </div>

        <div className="bg-gray-800 rounded-xl p-4 shadow-md">
          <DailyRangeIndicator />
        </div>

        <div className="bg-gray-800 rounded-xl p-4 shadow-md">
          <CardAlerta alerta="Exemplo de alerta exibido no dashboard" />
        </div>

        <div className="bg-gray-800 rounded-xl p-4 shadow-md">
          <NewsImpactKPI />
        </div>

        <div className="bg-gray-800 rounded-xl p-4 shadow-md">
          <PipVariationTimeBlocks />
        </div>
      </div>
    </main>
  )
}
