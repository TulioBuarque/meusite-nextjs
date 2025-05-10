export default function KPI({ label, value, unit, change, changeType }: any) {
  return (
    <div>
      <strong>{label}:</strong> {value} {unit} {change && `(${changeType})`}
    </div>
  )
}
