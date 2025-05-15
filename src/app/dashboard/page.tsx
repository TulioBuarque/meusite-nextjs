"use client"

import ProfessionalDailyRange from "@/components/kpis/ProfessionalDailyRange"
import { PipVariationTimeBlocks } from "@/components/kpis/PipVariationTimeBlocks"
import { ThemeProvider } from "@/components/theme-provider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Home, BarChart2, User, Settings } from "lucide-react"
import { TimeframeSelector } from "@/components/TimeframeSelector"

export default function DashboardPage() {
  const currentPercent = 0.25
  const highPercent = 0.65
  const lowPercent = -0.35

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        <aside className="w-16 md:w-64 bg-white border-r border-gray-200 flex flex-col">
          <div className="p-4 flex items-center justify-center md:justify-start">
            <span className="text-xl font-bold">ForexBlocks</span>
          </div>
          <nav className="flex-1 flex flex-col space-y-2 p-4">
            <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
              <Home className="w-5 h-5" />
              <span className="hidden md:inline">Home</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
              <BarChart2 className="w-5 h-5" />
              <span className="hidden md:inline">Assets</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
              <User className="w-5 h-5" />
              <span className="hidden md:inline">Profile</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
              <Settings className="w-5 h-5" />
              <span className="hidden md:inline">Settings</span>
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 space-y-6 max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">ASSETS</h1>
            <div className="flex items-center space-x-4">
              <Badge>EUR/USD</Badge>
              <Avatar>
                <AvatarImage src="/avatar.png" />
                <AvatarFallback>FB</AvatarFallback>
              </Avatar>
            </div>
          </div>

          {/* Updated Market Status and Current Price Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Market Status Card Novo Layout */}
            <Card className="border-none shadow-md bg-white overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-emerald-400 to-emerald-600"></div>
              <CardHeader className="pb-2">
                <CardTitle className="text-slate-700 text-lg">Market Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-emerald-500 mr-2 animate-pulse"></div>
                  <div className="text-emerald-600 text-3xl font-medium">Open</div>
                </div>
                <p className="text-slate-500 text-sm mt-2">Trading hours: 24/5</p>
              </CardContent>
            </Card>

            {/* Current Price Card Novo Layout */}
            <Card className="border-none shadow-md overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-indigo-400 to-indigo-600"></div>
              <CardHeader className="pb-2">
                <CardTitle className="text-slate-700 text-lg">Current Price</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <div className="text-slate-800 text-3xl font-bold">1.0780</div>
                  <Badge className="ml-3 bg-emerald-100 text-emerald-800 border-none">+0.42%</Badge>
                </div>
                <div className="flex justify-between mt-4 text-sm">
                  <div className="flex flex-col">
                    <span className="text-slate-500">Daily High</span>
                    <span className="text-emerald-600 font-medium">1.0892 (+0.85%)</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-slate-500">Daily Low</span>
                    <span className="text-rose-600 font-medium">1.0795 (-0.14%)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Professional Daily Range */}
          <Card>
            <CardHeader>
              <CardTitle>Daily Range (Percentual)</CardTitle>
            </CardHeader>
            <CardContent>
              <ProfessionalDailyRange
                currentPercent={currentPercent}
                highPercent={highPercent}
                lowPercent={lowPercent}
                title="Daily Range (Percentual) - EUR/USD"
              />
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

          {/* Pip Variation Block */}
          <Card>
            <CardHeader>
              <CardTitle>Variação de Pips — 1M</CardTitle>
            </CardHeader>
            <CardContent>
              <PipVariationTimeBlocks />
            </CardContent>
          </Card>
        </main>
      </div>
    </ThemeProvider>
  )
}
