'use client';

import Sidebar from '@/components/ui/Sidebar';
import { TimeframeSelector } from '@/components/TimeframeSelector';
import { DailyRangeIndicator } from '@/components/kpis/DailyRangeIndicator';
import { PipVariationTimeBlocks } from '@/components/kpis/PipVariationTimeBlocks';
import { ThemeToggleButton } from '@/components/ThemeToggleButton';
import { ThemeProvider } from '@/components/theme-provider';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

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

          <Tabs defaultValue="eurusd">
            <TabsList className="mb-6">
              <TabsTrigger value="eurusd">EUR/USD</TabsTrigger>
              <TabsTrigger value="dxy">DXY</TabsTrigger>
            </TabsList>

            {/* EUR/USD Tab */}
            <TabsContent value="eurusd" className="space-y-6">
              <TimeframeSelector />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-lg border p-4 shadow-sm bg-card text-card-foreground">
                  <DailyRangeIndicator />
                </div>
                <div className="rounded-lg border p-4 shadow-sm bg-card text-card-foreground">
                  <PipVariationTimeBlocks />
                </div>
              </div>
            </TabsContent>

            {/* DXY Tab */}
            <TabsContent value="dxy" className="space-y-6">
              <TimeframeSelector />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-lg border p-4 shadow-sm bg-card text-card-foreground">
                  <DailyRangeIndicator />
                </div>
                <div className="rounded-lg border p-4 shadow-sm bg-card text-card-foreground">
                  <PipVariationTimeBlocks />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </ThemeProvider>
  );
}
