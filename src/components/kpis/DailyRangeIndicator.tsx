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
  const posMin = 10;

  const pipsMax = ((safeMax - safeMin) * 10000).toFixed(1);
  const pipsCurrent = ((current - safeMin) * 10000).toFixed(1);

  const percentageMax = '+100%';
  const percentageCurrent = `${Math.round(((current - safeMin) / (safeMax - safeMin)) * 100)}%`;

  return (
    <div className="bg-gray-800 rounded-lg p-4 w-full flex flex-col items-center">
      <h3 className="text-lg font-semibold mb-4">{asset} — {date}</h3>
      <div className="relative h-80 w-12 flex flex-col items-center">
        {/* Vertical line */}
        <div className="w-1 bg-gray-600 h-full rounded"></div>

        {/* Max Marker */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{ bottom: `${posMax}%` }}
        >
          <div className="text-center text-green-400 text-xs mb-1">
            Max<br />{pipsMax} pips<br />{percentageMax}
          </div>
          <div className="w-3 h-3 bg-green-400 rounded-full mx-auto"></div>
        </div>

        {/* Current Marker */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{ bottom: `${posCurrent}%` }}
        >
          <div className="text-center text-blue-400 text-xs mb-1">
            Now<br />{pipsCurrent} pips<br />{percentageCurrent}
          </div>
          <div className="w-3 h-3 bg-blue-400 rounded-full mx-auto"></div>
        </div>

        {/* Min Marker */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{ bottom: `${posMin}%` }}
        >
          <div className="text-center text-red-400 text-xs mb-1">
            Min<br />0 pips<br />0%
          </div>
          <div className="w-3 h-3 bg-red-400 rounded-full mx-auto"></div>
        </div>
      </div>
    </div>
  );
}
