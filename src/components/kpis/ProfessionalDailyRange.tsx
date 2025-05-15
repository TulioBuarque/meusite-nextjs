'use client';

interface ProfessionalDailyRangeProps {
  asset: string;
  open: number;
  min: number;
  max: number;
  current: number;
  className?: string;
}

export function ProfessionalDailyRange({
  asset,
  open,
  min,
  max,
  current,
  className = '',
}: ProfessionalDailyRangeProps) {
  const formatPercent = (value: number) => {
    if (value === 0) return '0%';
    const percentage = ((value - open) / open) * 100;
    const formatted = isNaN(percentage) ? '0%' : `${percentage > 0 ? '+' : ''}${percentage.toFixed(2)}%`;
    return formatted;
  };

  return (
    <div className={`flex flex-col space-y-2 ${className}`}>
      <div className="flex justify-between">
        <span>Open:</span>
        <span>0%</span>
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
