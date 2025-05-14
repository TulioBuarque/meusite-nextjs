'use client';

interface Props {
  asset: string;
  date: string;
  min: number;
  max: number;
  current: number;
  changeFromOpen: number;
  changeFromMin: number;
  changeFromMax: number;
}

export function DailyRangeIndicator({
  asset,
  date,
  min,
  max,
  current,
  changeFromOpen,
  changeFromMin,
  changeFromMax,
}: Props) {
  const safeMin = min;
  const safeMax = Math.abs(max - min) < 0.01 ? min + 0.01 : max;

  const calculatePositionPercentage = (value: number) => {
    const raw = ((value - safeMin) / (safeMax - safeMin)) * 100;
    return Math.max(0, Math.min(raw, 100));
  };

  const posMax = 100;
  const posCurrent = calculatePositionPercentage(current);
  const posMin = 0;

  const pipsMax = ((safeMax - safeMin) * 10000).toFixed(1);
  const pipsCurrent = ((current - safeMin) * 10000).toFixed(1);

  const percentageMax = '+100%';
  const percentageCurrent = `${posCurrent.toFixed(0)}%`;

  return (
    <div className="bg-white rounded-lg shadow p-4 w-full flex flex-col items-center">
      <h3 className="text-lg font-semibold mb-2 text-gray-800">{asset} — {date}</h3>
      <div className="relative h-80 w-24 flex flex-col items-center">
        <div class
