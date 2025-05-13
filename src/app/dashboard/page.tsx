'use client';

import Sidebar from '@/components/ui/Sidebar';
import { TimeframeSelector } from '@/components/TimeframeSelector';
import { DailyRangeIndicator } from '@/components/kpis/DailyRangeIndicator';
import { PipVariationTimeBlocks } from '@/components/kpis/PipVariationTimeBlocks';
import { ThemeToggleButton } from '@/components/ThemeToggleButton';

export default function DashboardPage() {
  return (
    <div className="flex bg-gray-950 min-h-screen">
      <Sidebar />

      <main className="ml-64 flex-1 p-8 text-white space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">📊 ForexBlocks Dashboard</h1>
          <ThemeToggleButton />
        </div>

        <TimeframeSelector />

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Análises Técnicas</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-lg border border-gray-700 p-4 shadow-sm">
              <DailyRangeIndicator />
            </div>
            <div className="bg-gray-800 rounded-lg border border-gray-700 p-4 shadow-sm">
              <PipVariationTimeBlocks />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
