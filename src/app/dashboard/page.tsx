'use client'

import AssetTabs from '@/components/AssetTabs'

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">📊 ForexBlocks Dashboard</h1>
      <AssetTabs />
    </main>
  )
}
