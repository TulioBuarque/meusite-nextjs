'use client';

import { useState } from 'react';
import Sidebar from '@/components/ui/Sidebar';
import { ThemeProvider } from '@/components/theme-provider';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

export default function AlertsPage() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="flex min-h-screen bg-background text-foreground">
        <Sidebar />
        <main className="ml-64 p-6 md:p-8 w-full space-y-8">
          <h1 className="text-3xl font-bold mb-4">📢 Alerts</h1>

          <Tabs defaultValue="all">
            <TabsList className="mb-6">
              <TabsTrigger value="all" onClick={() => setActiveTab('all')}>Todos</TabsTrigger>
              <TabsTrigger value="active" onClick={() => setActiveTab('active')}>Ativos</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-6">
              <Card className="rounded-lg border p-4 bg-card text-card-foreground shadow-sm">
                <CardContent>
                  <p>Nenhum alerta disponível.</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="active" className="space-y-6">
              <Card className="rounded-lg border p-4 bg-card text-card-foreground shadow-sm">
                <CardContent>
                  <p>Nenhum alerta ativo disponível.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </ThemeProvider>
  );
}
