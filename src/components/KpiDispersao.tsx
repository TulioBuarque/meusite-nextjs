export function KpiDispersao({ value }: { value: number }) {
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
