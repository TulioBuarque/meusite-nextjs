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
    setAlerts(alerts.filter(alert => alert.id !== id
