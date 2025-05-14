"use client"

import { DailyRangeIndicator } from "../../components/kpis/DailyRangeIndicator"
import { PipVariationTimeBlocks } from "../../components/kpis/PipVariationTimeBlocks"
import { ThemeProvider } from "../../components/theme-provider"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar"
import { Badge } from "../../components/ui/badge"
import { Home, BarChart2, User, Settings, TrendingUp, TrendingDown, DollarSign } from "lucide-react"
import { TimeframeSelector } from "../../components/TimeframeSelector"

export default function DashboardPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="flex min-h-screen bg-gray-50">
        {/* Left Sidebar */}
        <aside className="w-16 md:w-64 bg-white border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <h1 className="text-xl font-bold text-blue-600 hidden md:block">ForexBlocks</h1>
            <div className="flex items-center justify-center md:hidden">
              <div className="w-8 h-8 relative">
                <div className="absolute w-8 h-2.5 bg-blue-500 rounded-md bottom-0"></div>
                <div className="absolute w-8 h-2.5 bg-blue-500 rounded-md bottom-2.5 opacity-70"></div>
                <div className="absolute w-8 h-2.5 bg-blue-500 rounded-md bottom-5 opacity-40"></div>
              </div>
            </div>
          </div>

          <nav className="flex-1 p-4">
            <ul className="space-y-6">
              <li>
                <a href="/" className="flex items-center text-gray-500 hover:text-blue-600 transition-colors">
                  <Home className="h-5 w-5 mr-3" />
                  <span className="hidden md:inline">Home</span>
                </a>
              </li>
              <li>
                <a href="/dashboard" className="flex items-center text-blue-600 font-medium">
                  <BarChart2 className="h-5 w-5 mr-3" />
                  <span className="hidden md:inline">Assets</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-gray-500 hover:text-blue-600 transition-colors">
                  <User className="h-5 w-5 mr-3" />
                  <span className="hidden md:inline">Profile</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-gray-500 hover:text-blue-600 transition-colors">
                  <Settings className="h-5 w-5 mr-3" />
                  <span className="hidden md:inline">Settings</span>
                </a>
              </li>
            </ul>
          </nav>

          <div className="p-4 border-t border-gray-200 hidden md:block">
            <div className="flex items-center">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://via.placeholder.com/40" alt="Trader" />
                <AvatarFallback>TR</AvatarFallback>
              </Avatar>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700">Trader</p>
                <p className="text-xs text-gray-500">Free Account</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-7xl mx-auto">
            <header className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
              <div className="flex items-center space-x-4">
                <a href="/login" className="text-sm text-gray-600 hover:text-blue-600">
                  Login
                </a>
                <a href="/signup" className="text-sm bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  Create Account
                </a>
              </div>
            </header>

            {/* Assets Section */}
            <section className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Assets</h2>
                <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                  EUR/USD
                </Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="shadow-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Daily Range</CardTitle>
                  </CardHeader>
                  <CardContent className="flex items-center justify-center min-h-[300px]">
                    <DailyRangeIndicator
                      asset="EUR/USD"
                      date={new Date().toISOString().split("T")[0]}
                      min={1.07}
                      max={1.085}
                      current={1.078}
                      changeFromOpen={0.0005}
                      changeFromMin={0.008}
                      changeFromMax={-0.007}
                    />
                  </CardContent>
                </Card>

                <Card className="shadow-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Current Price</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col">
                      <div className="flex items-baseline">
                        <span className="text-3xl font-bold text-gray-800">1.078</span>
                        <span className="ml-2 text-sm font-medium text-green-600 flex items-center">
                          <TrendingUp className="h-4 w-4 mr-1" />
                          +0.05%
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

        {/* Right Sidebar */}
        <aside className="hidden lg:block w-80 bg-white border-l border-gray-200 p-4">
          <div className="flex items-center mb-6">
            <Avatar className="h-12 w-12">
              <AvatarImage src="https://via.placeholder.com/40" alt="Trader Profile" />
              <AvatarFallback>TR</AvatarFallback>
            </Avatar>
            <div className="ml-3">
              <p className="font-medium text-gray-800">Trader Name</p>
              <div className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                <span className="text-xs text-gray-500">Active</span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-500 mb-3">Tracked Assets</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-between p-3 bg-blue-50 rounded-md">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <span className="text-xs font-medium text-blue-600">€/$</span>
                  </div>
                  <span className="font-medium text-gray-800">EUR/USD</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-medium">1.078</span>
                  <span className="text-xs text-green-600 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +0.05%
                  </span>
                </div>
              </li>
              <li className="flex items-center justify-between p-3 rounded-md hover:bg-gray-50">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                    <span className="text-xs font-medium text-gray-600">£/$</span>
                  </div>
                  <span className="font-medium text-gray-800">GBP/USD</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-medium">1.22</span>
                  <span className="text-xs text-red-600 flex items-center">
                    <TrendingDown className="h-3 w-3 mr-1" />
                    -0.12%
                  </span>
                </div>
              </li>
              <li className="flex items-center justify-between p-3 rounded-md hover:bg-gray-50">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                    <span className="text-xs font-medium text-gray-600">DXY</span>
                  </div>
                  <span className="font-medium text-gray-800">US Dollar Index</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-medium">104.95</span>
                  <span className="text-xs text-green-600 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +0.84%
                  </span>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-3">Recent Alerts</h3>
            <div className="p-3 rounded-md border border-gray-200 text-center text-sm text-gray-500">
              No recent alerts
            </div>
          </div>
        </aside>
      </div>
    </ThemeProvider>
  )
}
