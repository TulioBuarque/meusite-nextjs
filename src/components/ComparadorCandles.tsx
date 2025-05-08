export function ComparadorCandles({ candle30, candle1h }: { candle30: number; candle1h: number }) {
  const destaque = candle30 > candle1h
  return (
    <div className="mb-4">
      <p
        className="font-semibold mb-1"
        title="Comparador de Candles: Compara a movimentação (pips) dos candles de 30 minutos e 1 hora. Útil para detectar rompimentos recentes."
      >
        Comparador de Candles
      </p>
      <div className="flex justify-between text-sm">
        <div>Candle 30min: {candle30} pips</div>
        <div>Candle 1h: {candle1h} pips</div>
      </div>
      {destaque && <p className="text-red-400 mt-1 text-sm">🔥 Rompimento detectado!</p>}
    </div>
  )
}
