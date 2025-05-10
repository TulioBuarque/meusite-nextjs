'use client'

import { ComparadorCandles } from '@/components/ComparadorCandles'
import { DailyRangeIndicator } from '@/components/DailyRangeIndicator'
import { IAMBlock } from '@/components/IAMBlock'
import { KpiDispersao } from '@/components/KpiDispersao'
import { CardAlerta } from '@/components/CardAlerta'

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-6 space-y-8">
      <h1 className="text-3xl font-bold mb-6">📊 ForexBlocks Dashboard</h1>

      {/* IAM Block */}
      <IAMBlock iam={35} />

      {/* Dispersão */}
      <KpiDispersao dispersao={1.8} />

      {/* Comparador de Candles */}
      <ComparadorCandles candle30={12} candle1h={9} />

      {/* Daily Range */}
      <DailyRangeIndicator min={1.0800} max={1.1000} atual={1.0920} />

      {/* Card de Alerta */}
      <CardAlerta alerta="O mercado está em zona de risco! Evite operar agora." />
    </main>
  )
}
