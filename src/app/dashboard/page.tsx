'use client'

import { Alerts } from '../../components/Manus/Alerts'
import { Chart } from '../../components/Manus/Chart'
import { KPI } from '../../components/Manus/KPI'

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-6 space-y-8">
      <h1 className="text-3xl font-bold mb-6">📊 ForexBlocks Dashboard (Novo Layout)</h1>

      {/* Indicadores Chave */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPI label="EUR/USD Price" value={1.0850} unit="USD" change="+0.0012 (+0.11%)" changeType="positive" />
        <KPI label="Daily Volume" value={120.5} unit="M" />
        <KPI label="GBP/USD Price" value={1.2530} unit="USD" change="-0.0005 (-0.04%)" changeType="negative" />
        <KPI label="Market Sentiment" value="Neutral" />
      </section>

      {/* Gráfico de Preços */}
      <section>
        <Chart asset="EURUSD" />
      </section>

      {/* Alertas */}
      <section>
        <Alerts />
      </section>
    </main>
  )
}
