"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validação básica
    if (password !== confirmPassword) {
      alert('As senhas não coincidem');
      return;
    }
    
    // Simulação de cadastro - em produção, isso seria uma chamada de API
    console.log('Cadastro com:', name, email, password);
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

        <h2 className="text-3xl font-bold text-gray-100 mb-8">Criar Conta</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <input
              type="text"
              placeholder="Nome completo"
              className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 border border-gray-300 border-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          
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
          
          <div>
            <input
              type="password"
              placeholder="Senha"
              className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 border border-gray-300 border-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <div>
            <input
              type="password"
              placeholder="Confirmar senha"
              className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 border border-gray-300 border-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition duration-200"
            >
              Criar Conta
            </button>
          </div>
        </form>

        <div className="mt-8 pt-6 border-t border-gray-300 border-opacity-20 text-center">
          <p className="text-gray-300 mb-2">Já tem uma conta?</p>
          <Link href="/login" className="text-gray-100 hover:text-white text-lg font-medium">
            Entrar
          </Link>
        </div>
      </div>
    </div>
  );
}
