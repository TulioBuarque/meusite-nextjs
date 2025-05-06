'use client'

import { useState } from 'react'
import { IAMBlock } from './IAMBlock'
import { KpiDispersao } from './KpiDispersao'
import { ComparadorCandles } from './ComparadorCandles'
import { CardAlerta } from './CardAlerta'

const assets = ['EUR/USD', 'GBP/USD', 'DXY']

const mockData = {
  'EUR/USD': {
    iam: 74,
    dispersao: 1.3,
    candle30: 46,
    candle1h: 41,
    alerta: '🚨 Rompimento detectado: candle 30min (46 pips) > candle 1h anterior (41 pips)',
  },
  'GBP/USD': {
    iam: 23,
    dispersao: 1.8,
    candle30: 28,
    candle1h: 39,
    alerta: '🔵 Baixa eficiência detectada',
  },
  'DXY': {
    iam: 92,
    dispersao: 1.1,
    candle30: 54,
    candle1h: 52,
    alerta: '✅ IAM acima de 90%',
  },
}

export function AssetTabs() {
  const [selected, setSelected] = useState('EUR/USD')
  const { iam, dispersao, candle30, candle1h, alerta } = mockData[selected]

  return (
    <div className="w-full max-w-4xl mx-auto">
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

      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">{selected}</h2>
        <IAMBlock asset={selected} value={iam} />
        <KpiDispersao value={dispersao} />
        <ComparadorCandles candle30={candle30} candle1h={candle1h} />
        <CardAlerta text={alerta} />
      </div>
    </div>
  )
}
