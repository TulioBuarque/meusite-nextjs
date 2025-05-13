'use client'

import { TimeframeSelector } from '@/components/TimeframeSelector'
import { DailyRangeIndicator } from '@/components/kpis/DailyRangeIndicator'
import { PipVariationTimeBlocks } from '@/components/kpis/PipVariationTimeBlocks'

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-6 space-y-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">📊 ForexBlocks Dashboard</h1>

      <TimeframeSelector />

      <h2 className="text-2xl font-semibold mb-4">Análises Técnicas</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="bg-gray-800 rounded-xl p-4 shadow-md">
          <DailyRangeIndicator />
        </div>
        <div className="bg-gray-800 rounded-xl p-4 shadow-md">
          <PipVariationTimeBlocks />
        </div>
      </div>
    </main>
  )
}
