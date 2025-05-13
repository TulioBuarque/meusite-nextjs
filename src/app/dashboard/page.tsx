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
        <main className="flex-1 p-6 md:p-8 space-y-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold">📊 ForexBlocks Dashboard</h1>
            <ThemeToggleButton />
          </div>

          <Tabs defaultValue="eurusd">
            <TabsList className="mb-6">
              <TabsTrigger value="eurusd">EUR/USD</TabsTrigger>
              <TabsTrigger value="dxy">DXY</TabsTrigger>
            </TabsList>

            <TabsContent value="eurusd" className="space-y-6">
              <TimeframeSelector />
              <div className="rounded-lg border p-4 bg-card text-card-foreground shadow-sm">
                <DailyRangeIndicator />
              </div>
              <div className="rounded-lg border p-4 bg-card text-card-foreground shadow-sm">
                <PipVariationTimeBlocks />
              </div>
            </TabsContent>

            <TabsContent value="dxy" className="space-y-6">
              <TimeframeSelector />
              <div className="rounded-lg border p-4 bg-card text-card-foreground shadow-sm">
                <DailyRangeIndicator />
              </div>
              <div className="rounded-lg border p-4 bg-card text-card-foreground shadow-sm">
                <PipVariationTimeBlocks />
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </ThemeProvider>
  );
}
