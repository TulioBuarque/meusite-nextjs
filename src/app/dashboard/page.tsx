'use client'

import IAMBlock from '@/components/IAMBlock'
import KpiDispersao from '@/components/KpiDispersao'
import ComparadorCandles from '@/components/ComparadorCandles'
import DailyRangeIndicator from '@/components/DailyRangeIndicator'
import CardAlerta from '@/components/CardAlerta'

export default function DashboardPage() {
  return (
    <main className="p-4">
      <h1 className="text-2xl mb-4">Dashboard Forex</h1>

      <IAMBlock valor={35} />

      <KpiDispersao valor={1.8} />

      <ComparadorCandles candle30={12} candle1h={8} />

      <DailyRangeIndicator range={55} />

      <CardAlerta mensagem="⚠️ Nenhum alerta no momento." />
    </main>
  )
}
