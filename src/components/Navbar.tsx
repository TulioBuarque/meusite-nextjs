'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="bg-gray-900 text-white py-4 px-6 shadow-md fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link href="/">ForexBlocks</Link>
        </h1>
        <nav className="flex space-x-6">
          <Link href="/" className="hover:text-blue-400">Início</Link>
          <Link href="/dashboard" className="hover:text-blue-400">Dashboard</Link>
          <Link href="/login" className="hover:text-blue-400">Login</Link>
          <Link href="/signup" className="hover:text-blue-400">Criar Conta</Link>
        </nav>
      </div>
    </header>
  )
}
