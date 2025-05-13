'use client';

import Sidebar from '@/components/ui/Sidebar';
import { ThemeProvider } from '@/components/theme-provider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function SettingsPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="flex min-h-screen bg-background text-foreground">
        <Sidebar />
        <main className="ml-64 p-6 md:p-8 w-full space-y-8">
          <h1 className="text-3xl font-bold mb-4">⚙️ Settings</h1>

          <Card className="rounded-lg border p-4 bg-card text-card-foreground shadow-sm">
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
