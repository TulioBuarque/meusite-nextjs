"use client";

import { useState, useEffect } from 'react';
import Sidebar from '@/components/sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ModeToggle } from '@/components/mode-toggle'; // Assuming this exists from previous context
import { ThemeProvider } from '@/components/theme-provider'; // Assuming this exists

// Mock data for the chart
const chartData = [
  { time: '18:00', value: 15 },
  { time: '19:00', value: 13 },
  { time: '20:00', value: 18 },
  { time: '21:00', value: 14 },
  { time: '22:00', value: 19 },
  { time: '23:00', value: 16 },
  { time: '00:00', value: 20 },
  { time: '01:00', value: 17 },
  { time: '02:00', value: 22 },
  { time: '03:00', value: 18 },
];

// Mock data for KPIs
const kpiData = [
  { title: 'IAM', value: '1.032', icon: '📊', color: 'text-purple-400' },
  { title: 'Dispersão', value: '-9,12', icon: '📉', color: 'text-red-400' },
  { title: 'Comparador', value: '-3.41%', icon: '⚖️', color: 'text-green-400' },
  { title: 'Volatilidade', value: '6.53', icon: '⚡', color: 'text-orange-400' },
];

// Mock data for Time Blocks
const timeBlocksData = [
  { interval: '5m', value: '-4.5', color: 'text-red-500' },
  { interval: '15m', value: '+8.2', color: 'text-green-500' },
  { interval: '30m', value: '+5.7', color: 'text-green-500' },
  { interval: '1h', value: '-0.3', color: 'text-red-500' },
];

export default function DashboardPage() {
  const [activeInterval, setActiveInterval] = useState('15m');

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="flex min-h-screen bg-background text-foreground">
        <Sidebar />
        <main className="flex-1 p-6 md:p-8">
          {/* Header */}
          <header className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <ModeToggle />
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              {/* Add user name or dropdown here */}
            </div>
          </header>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Chart Section */}
            <Card className="bg-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">EUR USD Pip Variation</CardTitle>
                <div className="flex space-x-1">
                  {['5m', '15m', '30m', '1h'].map((interval) => (
                    <Button
                      key={interval}
                      variant={activeInterval === interval ? 'secondary' : 'ghost'}
                      size="sm"
                      onClick={() => setActiveInterval(interval)}
                      className="text-xs"
                    >
                      {interval}
                    </Button>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-[350px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                      <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} domain={['dataMin - 2', 'dataMax + 2']}/>
                      <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}/>
                      <Line type="monotone" dataKey="value" stroke="hsl(var(--primary))" strokeWidth={2} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* KPIs Section */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {kpiData.map((kpi) => (
                <Card key={kpi.title} className="bg-card">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">{kpi.title}</CardTitle>
                    <span className="text-2xl">{kpi.icon}</span>
                  </CardHeader>
                  <CardContent>
                    <div className={`text-3xl font-bold ${kpi.color}`}>{kpi.value}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Time Blocks Section */}
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="text-lg font-medium">Time Blocks</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-4">
                {timeBlocksData.map((block) => (
                  <div key={block.interval} className="flex items-baseline space-x-2 p-4 bg-muted rounded-lg">
                    <span className={`text-2xl font-bold ${block.color}`}>{block.value}</span>
                    <span className="text-sm text-muted-foreground">{block.interval}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

