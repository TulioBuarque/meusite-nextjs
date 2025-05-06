export function IAMBlock({ asset, value }: { asset: string; value: number }) {
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
