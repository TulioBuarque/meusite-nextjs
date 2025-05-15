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
    return `${percentage > 0 ? '+' : ''}${percentage.toFixed(2)}%`;
  };

  const formatPips = (value: number) => {
    const pips = Math.round((value - open) * 10000);
    return `${pips} pips`;
  };

  const positionPercent = (value: number) => {
    if (max === min) return 50;
    const relative = (value - min) / (max - min);
    return relative * 100;
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="relative h-64 w-12 flex flex-col items-center justify-between">
        {/* Linha Vertical */}
        <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-300 transform -translate-x-1/2"></div>

        {/* Max */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs text-center"
          style={{ top: `${positionPercent(max)}%` }}
        >
          <div>{formatPips(max)}</div>
          <div>{formatPercent(max)}</div>
        </div>

        {/* Now */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs text-center"
          style={{ top: `${positionPercent(current)}%` }}
        >
          <div>{formatPips(current)}</div>
          <div>{formatPercent(current)}</div>
        </div>

        {/* Min */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs text-center"
          style={{ top: `${positionPercent(min)}%` }}
        >
          <div>{formatPips(min)}</div>
          <div>{formatPercent(min)}</div>
        </div>

        {/* Open (0%) */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs text-center font-semibold"
          style={{ top: `${positionPercent(open)}%` }}
        >
          <div>0 pips</div>
          <div>0.00%</div>
        </div>
      </div>
    </div>
  );
}
