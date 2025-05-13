"use client";

import { useState } from 'react';
import Sidebar from '@/components/ui/Sidebar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ThemeProvider } from '@/components/theme-provider';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function AlertsPage() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="flex min-h-screen bg-background text-foreground">
        <Sidebar />
        <main className="ml-64 flex-1 p-8 space-y-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">📢 Alerts</h1>
          </div>

          <Tabs defaultValue="all" className="mb-6">
            <TabsList>
              <TabsTrigger value="all" onClick={() => setActiveTab('all')}>Todos</TabsTrigger>
              <TabsTrigger value="active" onClick={() => setActiveTab('active')}>Ativos</TabsTrigger>
            </TabsList>
          </Tabs>

          <Card className="rounded-lg border p-4 shadow-sm bg-card text-card-foreground">
            <CardContent>
              <p>Nenhum alerta disponível.</p>
            </CardContent>
          </Card>
        </main>
      </div>
    </ThemeProvider>
  );
}
