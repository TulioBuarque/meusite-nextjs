'use client'

import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-900 text-white flex-col gap-6 p-8">
      <h1 className="text-4xl font-bold">Bem-vindo ao ForexBlocks</h1>
      <p className="text-lg text-center max-w-xl">
        Essa é a versão inicial do dashboard para traders de Forex. Acesse os indicadores mockados ou crie uma conta.
      </p>
      <div className="flex gap-4">
        <Link href="/dashboard" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Ir para o Dashboard
        </Link>
        <Link href="/login" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
          Login
        </Link>
      </div>
    </main>
  )
}
