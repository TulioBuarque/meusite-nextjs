"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação de login - em produção, isso seria uma chamada de API
    console.log('Login com:', email, password);
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-700 p-4">
      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl shadow-xl p-8 w-full max-w-md">
        <div className="flex justify-center mb-8">
          <div className="flex items-center">
            <div className="mr-2">
              <div className="w-12 h-12 relative">
                <div className="absolute w-12 h-4 bg-blue-500 rounded-md bottom-0"></div>
                <div className="absolute w-12 h-4 bg-blue-500 rounded-md bottom-4 opacity-70"></div>
                <div className="absolute w-12 h-4 bg-blue-500 rounded-md bottom-8 opacity-40"></div>
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-100">ForexBlocks</h1>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-100 mb-8">Entrar</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 border border-gray-300 border-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="relative">
            <input
              type="password"
              placeholder="Senha"
              className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 border border-gray-300 border-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="absolute right-3 top-3 text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition duration-200"
          >
            Entrar
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link href="/forgot-password" className="text-blue-300 hover:text-blue-200 text-sm">
            Esqueci minha senha
          </Link>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-300 border-opacity-20 text-center">
          <Link href="/signup" className="text-gray-100 hover:text-white text-lg font-medium">
            Criar conta
          </Link>
        </div>
      </div>
    </div>
  );
}
