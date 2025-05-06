'use client'

import React from 'react'

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">📊 ForexBlocks Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Ativo: EUR/USD */}
        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">EUR/USD</h2>
          <KpiIAM value={74} />
          <KpiDispersao value={1.3} />
          <ComparadorCandles candle30={46} candle1h={41} />
          <CardAlerta text="🚨 Rompimento detectado: candle 30min (46 pips) > candle 1h anterior (41 pips)" />
        </div>

        {/* Ativo: GBP/USD */}
        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">GBP/USD</h2>
          <KpiIAM value={23} />
          <KpiDispersao value={1.8} />
          <ComparadorCandles candle30={28} candle1h={39} />
          <CardAlerta text="🔵 Baixa eficiência detectada" />
        </div>

        {/* Ativo: DXY */}
        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">DXY</h2>
          <KpiIAM value={92} />
          <KpiDispersao value={1.1} />
          <ComparadorCandles candle30={54} candle1h={52} />
          <CardAlerta text="✅ IAM acima de 90%" />
        </div>
      </div>
    </main>
  )
}

// MOCK de componentes (vamos separar depois)

function KpiIAM({ value }: { value: number }) {
  let color = value >= 70 ? 'bg-green-500' : value >= 30 ? 'bg-yellow-500' : 'bg-blue-500'
  return (
    <div className="mb-4">
      <p className="mb-1">IAM: {value}%</p>
      <div className="w-full h-3 bg-gray-600 rounded">
        <div className={`${color} h-3 rounded`} style={{ width: `${value}%` }}></div>
      </div>
    </div>
  )
}

function KpiDispersao({ value }: { value: number }) {
  let color = value <= 1.2 ? 'bg-green-500' : value <= 1.7 ? 'bg-yellow-500' : 'bg-red-500'
  return (
    <div className="mb-4">
      <p className="mb-1">Dispersão: {value}</p>
      <div className="w-full h-3 bg-gray-600 rounded">
        <div className={`${color} h-3 rounded`} style={{ width: `${Math.min(value * 50, 100)}%` }}></div>
      </div>
    </div>
  )
}

function ComparadorCandles({ candle30, candle1h }: { candle30: number, candle1h: number }) {
  const destaque = candle30 > candle1h
  return (
    <div className="mb-4">
      <p className="font-semibold mb-1">Comparador de Candles</p>
      <div className="flex justify-between text-sm">
        <div>Candle 30min: {candle30} pips</div>
        <div>Candle 1h: {candle1h} pips</div>
      </div>
      {destaque && <p className="text-red-400 mt-1 text-sm">🔥 Rompimento detectado!</p>}
    </div>
  )
}

function CardAlerta({ text }: { text: string }) {
  return (
    <div className="mt-2 p-3 bg-red-600 text-sm rounded shadow">
      {text}
    </div>
  )
}

