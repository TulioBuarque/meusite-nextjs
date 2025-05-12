export function CardAlerta({ text }: { text: string }) {
  return (
    <div
      className="mt-2 p-3 bg-red-600 text-sm rounded shadow"
      title="Alerta gerado automaticamente com base em regras de mercado, como rompimentos, IAM elevado ou dispersão eficiente."
    >
      {text}
    </div>
  )
}
