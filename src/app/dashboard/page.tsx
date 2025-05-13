'use client';

import Sidebar from '@/components/Sidebar';
import { TimeframeSelector } from '@/components/TimeframeSelector';
import { DailyRangeIndicator } from '@/components/kpis/DailyRangeIndicator';
import { PipVariationTimeBlocks } from '@/components/kpis/PipVariationTimeBlocks';
import { ThemeToggleButton } from '@/components/ThemeToggleButton';

export default function DashboardPage() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="ml-64 min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white p-6 space-y-8 w-full">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">📊 ForexBlocks Dashboard</h1>
          <ThemeToggleButton />
        </div>

        <TimeframeSelector />

        <h2 className="text-2xl font-semibold mb-4">Análises Técnicas</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <DailyRangeIndicator />
          <PipVariationTimeBlocks />
        </div>
      </main>
    </div>
  );
}
