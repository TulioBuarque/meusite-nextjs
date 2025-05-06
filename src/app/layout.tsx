import './globals.css'
import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ForexBlocks',
  description: 'Dashboard de Análise Técnica para Forex Traders',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <nav style={{ padding: '1rem', background: '#111827', color: 'white', display: 'flex', gap: '2rem' }}>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/login">Login</Link>
          <Link href="/signup">Criar Conta</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}

