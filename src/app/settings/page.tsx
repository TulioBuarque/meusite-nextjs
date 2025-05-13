"use client";

import { useState } from 'react';
import Sidebar from '@/components/ui/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ModeToggle } from '@/components/mode-toggle';
import { ThemeProvider } from '@/components/theme-provider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function SettingsPage() {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [apiKey, setApiKey] = useState('');
  const [updateInterval, setUpdateInterval] = useState('5');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [soundAlerts, setSoundAlerts] = useState(true);
  const [theme, setTheme] = useState('dark');
  const [density, setDensity] = useState('comfortable');

  const handleSave = () => {
    console.log('Settings saved:', {
      name,
      email,
      apiKey,
      updateInterval,
      emailNotifications,
      pushNotifications,
      soundAlerts,
      theme,
      density
    });
    alert('Configurações salvas com sucesso!');
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="flex min-h-screen bg-background text-foreground">
        <Sidebar />
        <main className="flex-1 p-6 md:p-8">
          <header className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Configurações</h1>
            <div className="flex items-center space-x-4">
              <ModeToggle />
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </header>

          <Tabs defaultValue="profile" className="mb-6">
            <TabsList className="mb-6">
              <TabsTrigger value="profile">Perfil</TabsTrigger>
              <TabsTrigger value="api">API</TabsTrigger>
              <TabsTrigger value="notifications">Notificações</TabsTrigger>
              <TabsTrigger value="appearance">Aparência</TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Informações Pessoais</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Senha</Label>
                    <Input id="password" type="password" placeholder="••••••••" />
                    <p className="text-sm text-muted-foreground">
                      Deixe em branco para manter a senha atual
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="api">
              <Card>
                <CardHeader>
                  <CardTitle>Configurações de API</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="api-key">Chave da API TraderMade</Label>
                    <Input
                      id="api-key"
                      value={apiKey}
                      onChange={(e) => setApiKey(e.target.value)}
                      placeholder="Insira sua chave da API TraderMade"
                    />
                    <p className="text-sm text-muted-foreground">
                      Obtenha sua chave em{' '}
                      <a href="https://tradermade.com/signup" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                        tradermade.com
                      </a>
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="update-interval">Intervalo de Atualização</Label>
                    <Select value={updateInterval} onValueChange={setUpdateInterval}>
                      <SelectTrigger id="update-interval">
                        <SelectValue placeholder="Selecione um intervalo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5">5 segundos</SelectItem>
                        <SelectItem value="10">10 segundos</SelectItem>
                        <SelectItem value="30">30 segundos</SelectItem>
                        <SelectItem value="60">1 minuto</SelectItem>
                        <SelectItem value="300">5 minutos</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notifications">
              <Card>
                <CardHeader>
                  <CardTitle>Preferências de Notificação</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Notificações por Email</h3>
                      <p className="text-sm text-muted-foreground">Receba alertas por email</p>
                    </div>
                    <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Notificações Push</h3>
                      <p className="text-sm text-muted-foreground">Receba alertas no navegador</p>
                    </div>
                    <Switch checked={pushNotifications} onCheckedChange={setPushNotifications} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Alertas Sonoros</h3>
                      <p className="text-sm text-muted-foreground">Receba alertas com som</p>
                    </div>
                    <Switch checked={soundAlerts} onCheckedChange={setSoundAlerts} />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="appearance">
              <Card>
                <CardHeader>
                  <CardTitle>Aparência</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>Tema</Label>
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="theme-light" className="cursor-pointer">Light</Label>
                      <Switch id="theme-switch" checked={theme === 'dark'} onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')} />
                      <Label htmlFor="theme-dark" className="cursor-pointer">Dark</Label>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="density">Densidade de Informação</Label>
                    <Select value={density} onValueChange={setDensity}>
                      <SelectTrigger id="density">
                        <SelectValue placeholder="Selecione a densidade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="comfortable">Confortável</SelectItem>
                        <SelectItem value="compact">Compacta</SelectItem>
                        <SelectItem value="expanded">Expandida</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-6">
            <Button className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white" onClick={handleSave}>
              Salvar Alterações
            </Button>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}
