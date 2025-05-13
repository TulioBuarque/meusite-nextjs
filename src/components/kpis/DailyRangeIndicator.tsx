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
    <div className="bg-gray-800 rounded-lg p-4 w-full flex flex-col items-center">
      <h3 className="text-lg font-semibold mb-4">{asset} — {date}</h3>
      <div className="relative h-80 w-24 flex flex-col items-center">
        <div className="absolute w-1 bg-gray-600 h-full left-1/2 -translate-x-1/2 rounded"></div>

        {/* Max Label */}
        <div className="absolute left-10 text-green-400 text-xs flex items-center" style={{ bottom: `${posMax}%` }}>
          <div className="w-2 h-2 bg-green-400 rounded-full mr-1"></div>
          Max {pipsMax} pips {percentageMax}
        </div>

        {/* Current Label */}
        <div className="absolute left-10 text-blue-400 text-xs flex items-center" style={{ bottom: `${posCurrent}%` }}>
          <div className="w-2 h-2 bg-blue-400 rounded-full mr-1"></div>
          Now {pipsCurrent} pips {percentageCurrent}
        </div>

        {/* Min Label */}
        <div className="absolute left-10 text-red-400 text-xs flex items-center" style={{ bottom: `${posMin}%` }}>
          <div className="w-2 h-2 bg-red-400 rounded-full mr-1"></div>
          Min 0 pips 0%
        </div>
      </div>
    </div>
  );
}
