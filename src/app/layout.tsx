import './globals.css'
import { Inter } from 'next/font/google'
import { NavLink } from '@/components/NavLink' // Componente isolado com "use client"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ForexBlocks',
  description: 'Dashboard de Análise Técnica para Forex Traders',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <header className="bg-gray-800 shadow-md px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight">📊 ForexBlocks</div>
          <nav className="flex gap-4">
            <NavLink href="/">Início</NavLink>
            <NavLink href="/dashboard">Dashboard</NavLink>
            <NavLink href="/login">Login</NavLink>
            <NavLink href="/signup">Criar Conta</NavLink>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
