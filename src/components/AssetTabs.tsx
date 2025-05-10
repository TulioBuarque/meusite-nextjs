'use client'

import { useState } from 'react'
import { KPI } from './KPI'
import { ChartComponent } from './Chart'
import { AlertComponent } from './Alerts'

const assets = ['EUR/USD', 'GBP/USD', 'DXY']

const mockData = {
  'EUR/USD': {
    price: 1.13039,
    high: 1.13079,
    low: 1.12960,
    volume: 15000,
    change: 0.63,
    alerts: [
      { message: '🚨 Rompimento detectado: candle 30min (46 pips) > candle 1h anterior (41 pips)', type: 'warning' },
    ],
  },
  'GBP/USD': {
    price: 1.2200,
    high: 1.2280,
    low: 1.2170,
    volume: 12000,
    change: -0.12,
    alerts: [
      { message: '🔵 Baixa eficiência detectada', type: 'info' },
    ],
  },
  'DXY': {
    price: 104.95,
    high: 105.2,
    low: 104.3,
    volume: 20000,
    change: 0.84,
    alerts: [
      { message: '✅ IAM acima de 90%', type: 'success' },
    ],
  },
}

export function AssetTabs() {
  const [selected, setSelected] = useState('EUR/USD')
  const { price, high, low, volume, change, alerts } = mockData[selected]

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      {/* Abas de Navegação */}
      <div className="flex justify-center mb-6 gap-4">
        {assets.map((a) => (
          <button
            key={a}
            onClick={() => setSelected(a)}
            className={`px-4 py-2 rounded font-semibold text-sm transition ${
              selected === a ? 'bg-blue-600 text-white' : 'bg-zinc-700 text-gray-300 hover:bg-zinc-600'
            }`}
          >
            {a}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* KPIs */}
        <div className="col-span-1 flex flex-col gap-4">
          <KPI label="Preço Atual" value={price} unit="USD" />
          <KPI label="Máxima do Dia" value={high} unit="USD" />
          <KPI label="Mínima do Dia" value={low} unit="USD" />
          <KPI label="Volume" value={volume} unit="lot" />
          <KPI label="Variação" value={change} unit="%" />
        </div>

        {/* Gráfico */}
        <div className="col-span-2 bg-gray-800 p-4 rounded-lg shadow-md">
          <ChartComponent />
        </div>
      </div>

      {/* Alertas */}
      <div className="mt-8">
        {alerts.map((alert, idx) => (
          <AlertComponent key={idx} message={alert.message} type={alert.type} />
        ))}
      </div>
    </div>
  )
}

