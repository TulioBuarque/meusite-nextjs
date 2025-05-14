"use client";

import { ProfessionalDailyRange } from "../../components/kpis/ProfessionalDailyRange";
import { PipVariationTimeBlocks } from "../../components/kpis/PipVariationTimeBlocks";
import { ThemeProvider } from "../../components/theme-provider";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { Home, BarChart2, User, Settings, TrendingUp, TrendingDown, DollarSign } from "lucide-react";
import { TimeframeSelector } from "../../components/TimeframeSelector";

export default function DashboardPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="flex min-h-screen bg-gray-50">
        {/* Left Sidebar */}
        <aside className="w-16 md:w-64 bg-white border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <h1 className="text-xl font-bold text-blue-600 hidden md:block">ForexBlocks</h1>
          </div>
          <nav className="flex-1 p-4">
            <ul className="space-y-6">
              <li><a href="/" className="flex items-center text-gray-500 hover:text-blue-600"><Home className="h-5 w-5 mr-3" /><span className="hidden md:inline">Home</span></a></li>
              <li><a href="/dashboard" className="flex items-center text-blue-600 font-medium"><BarChart2 className="h-5 w-5 mr-3" /><span className="hidden md:inline">Assets</span></a></li>
              <li><a href="#" className="flex items-center text-gray-500 hover:text-blue-600"><User className="h-5 w-5 mr-3" /><span className="hidden md:inline">Profile</span></a></li>
              <li><a href="#" className="flex items-center text-gray-500 hover:text-blue-600"><Settings className="h-5 w-5 mr-3" /><span className="hidden md:inline">Settings</span></a></li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-7xl mx-auto">
            <header className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
            </header>

            {/* Assets Section */}
            <section className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Assets</h2>
                <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                  EUR/USD
                </Badge>
              </div>

              <Card className="shadow-sm mb-6">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Daily Range</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ProfessionalDailyRange
                    asset="EUR/USD"
                    min={1.0725}
                    max={1.0785}
                    current={1.0765}
                    open={1.0745}
                    className="w-full"
                  />
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="shadow-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Current Price</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col">
                      <div className="flex items-baseline">
                        <span className="text-3xl font-bold text-gray-800">1.078</span>
                        <span className="ml-2 text-sm font-medium text-green-600 flex items-center">
                          <TrendingUp className="h-4 w-4 mr-1" /> +0.05%
                        </span>
                      </div>
                      <div className="mt-2 text-sm text-gray-500">EUR/USD • {new Date().toLocaleDateString()}</div>
                      <div className="mt-4 grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-gray-500">Daily High</p>
                          <p className="font-medium">1.085</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Daily Low</p>
                          <p className="font-medium">1.070</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Market Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col h-full justify-center items-center py-4">
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-3">
                        <DollarSign className="h-8 w-8 text-green-600" />
                      </div>
                      <p className="text-lg font-medium text-gray-800">Market Open</p>
                      <p className="text-sm text-gray-500">Normal volatility</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Activity Section */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Activity</h2>
              </div>

              <Card className="shadow-sm mb-6">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Timeframe Selection</CardTitle>
                </CardHeader>
                <CardContent>
                  <TimeframeSelector />
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardContent className="pt-6">
                  <PipVariationTimeBlocks />
                </CardContent>
              </Card>
            </section>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}
