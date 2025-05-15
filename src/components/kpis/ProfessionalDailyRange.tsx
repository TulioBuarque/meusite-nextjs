'use client';

import { useEffect, useState } from 'react';

interface ProfessionalDailyRangeProps {
  asset: string;
  className?: string;
}

interface DailyRangeData {
  open: number;
  min: number;
  max: number;
  current: number;
}

export function ProfessionalDailyRange({ asset, className = '' }: ProfessionalDailyRangeProps) {
  const [data, setData] = useState<DailyRangeData | null>(null);

  // Simula a atualização do mercado a cada 5 segundos
  useEffect(() => {
    const open = 1.0800;
    let tick = 0;

    const interval = setInterval(() => {
      const randomFluctuation = Math.sin(tick / 10) * 0.005;
      const basePrice = open + randomFluctuation;

      const simulatedData: DailyRangeData = {
        open,
        min: basePrice - 0.002,
        max: basePrice + 0.003,
        current: basePrice,
      };

      setData(simulatedData);
      tick++;
    }, 5000);

    return () => clearInterval(interval);
  }, [asset]);

  if (!data) {
    return <div className="text-gray-500">Carregando dados fictícios...</div>;
  }

  const { open, min, max, current } = data;

  const formatPercent = (value: number) => {
    if (open === 0) return '0.00%';
    const percentage = ((value - open) / open) * 100;
    const formatted = isNaN(percentage) ? '0.00%' : `${percentage > 0 ? '+' : ''}${percentage.toFixed(2)}%`;
    return formatted;
  };

  return (
    <div className={`flex flex-col space-y-2 ${className}`}>
      <div className="flex justify-between">
        <span>Open:</span>
        <span>0.00%</span>
      </div>
      <div className="flex justify-between">
        <span>Max:</span>
        <span>{formatPercent(max)}</span>
      </div>
      <div className="flex justify-between">
        <span>Min:</span>
        <span>{formatPercent(min)}</span>
      </div>
      <div className="flex justify-between">
        <span>Now:</span>
        <span>{formatPercent(current)}</span>
      </div>
    </div>
  );
}
