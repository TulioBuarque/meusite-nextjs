"use client";

import { useState } from 'react';
import Sidebar from '@/components/ui/Sidebar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ModeToggle } from '@/components/mode-toggle';
import { ThemeProvider } from '@/components/theme-provider';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Edit, Trash2 } from 'lucide-react';

// Mock data for alerts
const alertsData = [
  { id: 1, priority: 'high', status: 'active', pair: 'EUR/USD', condition: 'above', value: '1.0850' },
  { id: 2, priority: 'medium', status: 'active', pair: 'GBP/USD', condition: 'above', value: '1.2750' },
  { id: 3, priority: 'medium', status: 'active', pair: 'USD/JPY', condition: 'below', value: '150.00' },
  { id: 4, priority: 'high', status: 'active', pair: 'AUD/USD', condition: 'above', value: '0.6550' },
  { id: 5, priority: 'low', status: 'active', pair: 'USD/CAD', condition: 'below', value: '1.3500' },
  { id: 6, priority: 'low', status: 'inactive', pair: 'USD/CAD', condition: 'above', value: '1.3900' },
];

export default function AlertsPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [alerts, setAlerts] = useState(alertsData);

  const filteredAlerts = alerts.filter(alert => {
    if (activeTab === 'all') return true;
    if (activeTab === 'active') return alert.status === 'active';
    if (activeTab === 'triggered') return alert.status === 'triggered';
    return true;
  });

  const handleDeleteAlert = (id: number) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-400';
      case 'medium': return 'text-yellow-400';
      case 'low': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="flex min-h-screen bg-background text-foreground">
        <Sidebar />
        <main className="flex-1 p-6 md:p-8">
          <header className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Alertas</h1>
            <div className="flex items-center space-x-4">
              <Button className="bg-blue-500 hover:bg-blue-600">Adicionar Alerta</Button>
              <ModeToggle />
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </header>

          <Tabs defaultValue="all" className="mb-6">
            <TabsList>
              <TabsTrigger value="all" onClick={() => setActiveTab('all')}>Todos</TabsTrigger>
              <TabsTrigger value="active" onClick={() => setActiveTab('active')}>Ativos</TabsTrigger>
              <TabsTrigger value="triggered" onClick={() => setActiveTab('triggered')}>Disparados</TabsTrigger>
            </TabsList>
          </Tabs>

          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 font-medium">Prioridade</th>
                      <th className="text-left p-4 font-medium">Status</th>
                      <th className="text-left p-4 font-medium">Par</th>
                      <th className="text-left p-4 font-medium">Condição</th>
                      <th className="text-left p-4 font-medium">Valor</th>
                      <th className="text-right p-4 font-medium">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredAlerts.map(alert => (
                      <tr key={alert.id} className="border-b border-border hover:bg-muted/50">
                        <td className="p-4">
                          <div className={`flex items-center ${getPriorityColor(alert.priority)}`}>
                            <div className="w-3 h-3 rounded-full mr-2 bg-current"></div>
                            <span className="capitalize">{alert.priority}</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            alert.status === 'active' ? 'bg-green-500/20 text-green-400' :
                            alert.status === 'triggered' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-gray-500/20 text-gray-400'
                          }`}>
                            {alert.status === 'active' ? 'Ativo' :
                             alert.status === 'triggered' ? 'Disparado' : 'Inativo'}
                          </span>
                        </td>
                        <td className="p-4 font-medium">{alert.pair}</td>
                        <td className="p-4">{alert.condition === 'above' ? 'Acima de' : 'Abaixo de'}</td>
                        <td className="p-4 font-mono">{alert.value}</td>
                        <td className="p-4 text-right">
                          <div className="flex justify-end space-x-2">
                            <Button variant="ghost" size="icon"><Edit className="h-4 w-4" /></Button>
                            <Button variant="ghost" size="icon" onClick={() => handleDeleteAlert(alert.id)}><Trash2 className="h-4 w-4" /></Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </ThemeProvider>
  );
}
