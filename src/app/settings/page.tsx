"use client";

import Sidebar from '@/components/ui/Sidebar';
import { ThemeProvider } from '@/components/theme-provider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function SettingsPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="flex min-h-screen bg-background text-foreground">
        <Sidebar />
        <main className="ml-64 flex-1 p-8 space-y-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">⚙️ Settings</h1>
          </div>

          <Card className="rounded-lg border p-4 shadow-sm bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>Configurações Gerais</CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="bg-blue-500 hover:bg-blue-600">Salvar Alterações</Button>
            </CardContent>
          </Card>
        </main>
      </div>
    </ThemeProvider>
  );
}
