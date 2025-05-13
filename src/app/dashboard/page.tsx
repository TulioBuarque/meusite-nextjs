'use client';

import Sidebar from '@/components/ui/Sidebar';
import { TimeframeSelector } from '@/components/TimeframeSelector';
import { DailyRangeIndicator } from '@/components/kpis/DailyRangeIndicator';
import { PipVariationTimeBlocks } from '@/components/kpis/PipVariationTimeBlocks';
import { ThemeToggleButton } from '@/components/ThemeToggleButton';
import { ThemeProvider } from '@/components/theme-provider';

export default function DashboardPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="flex min-h-screen bg-background text-foreground">
        <Sidebar />

        <main className="ml-64 flex-1 p-8 space-y-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">📊 ForexBlocks Dashboard</h1>
            <ThemeToggleButton />
          </div>

          <TimeframeSelector />

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">Análises Técnicas</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-lg border p-4 shadow-sm bg-card text-card-foreground">
                <DailyRangeIndicator />
              </div>
              <div className="rounded-lg border p-4 shadow-sm bg-card text-card-foreground">
                <PipVariationTimeBlocks />
              </div>
            </div>
          </section>
        </main>
      </div>
    </ThemeProvider>
  );
}
