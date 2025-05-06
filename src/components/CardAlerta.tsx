export function CardAlerta({ text }: { text: string }) {
  return (
    <div className="mt-2 p-3 bg-red-600 text-sm rounded shadow">
      {text}
    </div>
  )
}
