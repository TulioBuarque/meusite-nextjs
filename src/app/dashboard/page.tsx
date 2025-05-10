'use client'

import ComparadorCandles from '@/components/ComparadorCandles'
import DailyRangeIndicator from '@/components/DailyRangeIndicator'
import IAMBlock from '@/components/IAMBlock'
import KpiDispersao from '@/components/KpiDispersao'
import CardAlerta from '@/components/CardAlerta'

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-6 space-y-8">
      <h1 className="text-3xl font-bold mb-6">📊 ForexBlocks Dashboard</h1>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <IAMBlock />
        <KpiDispersao />
        <ComparadorCandles />
      </section>

      <section>
        <DailyRangeIndicator />
      </section>

      <section>
        <CardAlerta />
      </section>
    </main>
  )
}
