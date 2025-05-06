'use client'

import { useState } from 'react'
import { IAMBlock } from './IAMBlock'

const assets = ['EUR/USD', 'GBP/USD', 'DXY']
const mockValues = {
  'EUR/USD': 72,
  'GBP/USD': 45,
  'DXY': 88,
}

export function AssetTabs() {
  const [selectedAsset, setSelectedAsset] = useState('EUR/USD')

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
      <div className="flex justify-center">
        <IAMBlock asset={selectedAsset} value={mockValues[selectedAsset]} />
      </div>
    </div>
  )
}
