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
  }
}

export function AssetTabs() {
  const [selectedAsset, setSelectedAsset] = useState('EUR/USD')
  const data = mockData[selectedAsset]

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Tabs */}
      <div className="flex justify-center mb-6 gap-4">
        {assets.map((asset) => (
          <button
            key={asset}
            onClick={() => setSelectedAsset(asset)}
            className={`px-4 py-2 rounded font-semibold text-sm transition ${
              selectedAsset === asset
                ? 'bg-blue-600 text-white'
                : 'bg-zinc-700 text-gray-300 hover:bg-zinc-600'
            }`}
          >
            {asset}
          </button>
        ))}
      </div>

      {/* Conteúdo do ativo selecionado */}
      <div className="bg-gray-800 p-6 rounded-lg shadow space-y-4">
        <h2 className="text-xl font-bold">{selectedAsset}</h2>
        <IAMBlock asset={selectedAsset} value={data.iam} />
        <KpiDispersao value={data.dispersao} />
        <ComparadorCandles candle30={data.candle30} candle1h={data.candle1h} />
        <CardAlerta text={data.alerta} />
      </div>
    </div>
  )
}

