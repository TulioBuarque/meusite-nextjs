"use client";

import { ProfessionalDailyRange } from "@/components/kpis/ProfessionalDailyRange";
import { PipVariationTimeBlocks } from "@/components/kpis/PipVariationTimeBlocks";
import { ThemeProvider } from "@/components/theme-provider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TimeframeSelector } from "@/components/TimeframeSelector";

export default function DashboardPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <main className="flex min-h-screen flex-col items-center justify-start bg-gray-50 p-4">
        <div className="w-full max-w-7xl space-y-6">
          {/* Professional Daily Range com Percentual */}
          <Card>
            <CardHeader>
              <CardTitle>EUR/USD Daily Range (Percentual)</CardTitle>
            </CardHeader>
            <CardContent>
              <ProfessionalDailyRange
                asset="EUR/USD"
                min={-0.02}    // -2%
                max={0.15}     // +15%
                current={0.07} // +7%
                open={0}       // 0% de referência
                className="w-full"
              />
            </CardContent>
          </Card>

          {/* Pip Variation */}
          <Card>
            <CardContent>
              <PipVariationTimeBlocks />
            </CardContent>
          </Card>

          {/* Timeframe Selector */}
          <Card>
            <CardHeader>
              <CardTitle>Timeframe Selection</CardTitle>
            </CardHeader>
            <CardContent>
              <TimeframeSelector />
            </CardContent>
          </Card>
        </div>
      </main>
    </ThemeProvider>
  );
}
