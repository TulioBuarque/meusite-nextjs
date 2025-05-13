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

  const position = (value: number) => {
    const raw = ((value - safeMin) / (safeMax - safeMin)) * 80 + 10;
    return Math.max(10, Math.min(raw, 90));
  };

  const posMax = 90;
  const posCurrent = position(current);

  return (
    <div className="flex flex-col items-center my-6 w-full mx-auto bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-700">
      <h2 className="text-lg font-semibold mb-2">{asset} - {date}</h2>
      <div className="relative w-full h-24 bg-gray-700 rounded overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 bg-green-500" style={{ left: `${posMax}%`, width: '2px' }} />
        <div className="absolute left-0 top-0 bottom-0 bg-blue-500" style={{ left: `${posCurrent}%`, width: '2px' }} />
      </div>
      <div className="mt-2 text-sm">
        <div>Min: {min}</div>
        <div>Max: {max}</div>
        <div>Current: {current}</div>
        <div>Change from Open: {changeFromOpen}</div>
        <div>Change from Min: {changeFromMin}</div>
        <div>Change from Max: {changeFromMax}</div>
      </div>
    </div>
  );
}
