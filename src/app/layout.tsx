import './globals.css'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ForexBlocks',
  description: 'Dashboard de Análise Técnica para Forex Traders',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {/* Navbar */}
        <nav className="bg-gray-900 text-white px-6 py-4 flex gap-6 items-center shadow-md fixed top-0 w-full z-50">
          <Link href="/" className="text-xl font-bold hover:text-blue-400 transition-colors">
            ForexBlocks
          </Link>
          <div className="flex gap-4 ml-auto">
            <Link href="/dashboard" className="hover:text-blue-400 transition-colors">Dashboard</Link>
            <Link href="/login" className="hover:text-blue-400 transition-colors">Login</Link>
            <Link href="/signup" className="hover:text-blue-400 transition-colors">Criar Conta</Link>
          </div>
        </nav>

        {/* Conteúdo da página com espaço para a navbar fixa */}
        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  )
}
