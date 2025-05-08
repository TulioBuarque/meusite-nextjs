'use client'

import { useState } from 'react'
import { IAMBlock } from './IAMBlock'
import { KpiDispersao } from './KpiDispersao'
import { ComparadorCandles } from './ComparadorCandles'
import { CardAlerta } from './CardAlerta'
import { DailyRangeIndicator } from './DailyRangeIndicator' // NOVO

const assets = ['EUR/USD', 'GBP/USD', 'DXY']

const mockData = {
  'EUR/USD': {
    iam: 74,
    dispersao: 1.3,
    candle30: 46,
    candle1h: 41,
    alerta: '🚨 Rompimento detectado: candle 30min (46 pips) > candle 1h anterior (41 pips)',
    min: 1.12960,
    max: 1.13079,
    current: 1.13039,
    changeFromOpen: 0.63,
    changeFromMin: -0.05,
    changeFromMax: 0.84,
  },
  'GBP/USD': {
    iam: 23,
    dispersao: 1.8,
    candle30: 28,
    candle1h: 39,
    alerta: '🔵 Baixa eficiência detectada',
    min: 1.2170,
    max: 1.2280,
    current: 1.2200,
    changeFromOpen: 0.12,
    changeFromMin: -0.1,
    changeFromMax: 0.45,
  },
  'DXY': {
    iam: 92,
    dispersao: 1.1,
    candle30: 54,
    candle1h: 52,
    alerta: '✅ IAM acima de 90%',
    min: 104.3,
    max: 105.2,
    current: 104.95,
    changeFromOpen: 0.6,
    changeFromMin: 0.22,
    changeFromMax: -0.12,
  },
}

export function AssetTabs() {
  const [selected, setSelected] = useState('EUR/USD')
  const {
    iam,
    dispersao,
    candle30,
    candle1h,
    alerta,
    min,
    max,
    current,
    changeFromOpen,
    changeFromMin,
    changeFromMax,
  } = mockData[selected]

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
        <DailyRangeIndicator
          asset={selected}
          date="08/05/2025"
          min={min}
          max={max}
          current={current}
          changeFromOpen={changeFromOpen}
          changeFromMin={changeFromMin}
          changeFromMax={changeFromMax}
        />
        <KpiDispersao value={dispersao} />
        <ComparadorCandles candle30={candle30} candle1h={candle1h} />
        <CardAlerta text={alerta} />
      </div>
    </div>
  )
}
