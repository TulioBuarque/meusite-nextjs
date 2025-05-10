'use client'

import IAMBlock from '@/components/IAMBlock'
import KpiDispersao from '@/components/KpiDispersao'
import ComparadorCandles from '@/components/ComparadorCandles'
import DailyRangeIndicator from '@/components/DailyRangeIndicator'
import CardAlerta from '@/components/CardAlerta'

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-6 space-y-8">
      <h1 className="text-3xl font-bold mb-6">📊 ForexBlocks Dashboard</h1>

      <IAMBlock iam={25} />

      <KpiDispersao dispersao={1.8} />

      <ComparadorCandles candle30={30} candle1h={21} />

      <DailyRangeIndicator range={48} />

      <CardAlerta alerta="Exemplo de alerta exibido no dashboard" />
    </main>
  )
}
