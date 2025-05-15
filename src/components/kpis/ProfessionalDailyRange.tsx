"use client";

import { useState, useEffect } from "react";

interface ProfessionalDailyRangeProps {
  asset: string;
  min: number;
  max: number;
  current: number;
  changeFromOpen: number;
  changeFromMin: number;
  changeFromMax: number;
}

export function ProfessionalDailyRange({
  asset,
  min,
  max,
  current,
  changeFromOpen,
  changeFromMin,
  changeFromMax,
}: ProfessionalDailyRangeProps) {
  const [animatedPercent, setAnimatedPercent] = useState(0);

  const totalRange = max - min === 0 ? 1 : max - min;
  const zeroPosition = ((0 - min) / totalRange) * 100;
  const currentPosition = ((current - min) / totalRange) * 100;

  const formatPercent = (value: number) => {
    const sign = value > 0 ? "+" : value < 0 ? "-" : "";
    return `${sign}${Math.abs(value).toFixed(2)}%`;
  };

  useEffect(() => {
    const duration = 1500;
    const startTime = performance.now();
    const startValue = animatedPercent;

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setAnimatedPercent(startValue + (currentPosition - startValue) * progress);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [currentPosition]);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="relative h-64 w-6 flex flex-col justify-between">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300"></div>

        <div
          className="absolute left-1/2 transform -translate-x-1/2 bg-blue-600 w-1.5 h-1.5 rounded-full"
          style={{ bottom: `${animatedPercent}%` }}
        ></div>

        <div className="absolute left-full ml-2 text-xs" style={{ bottom: "100%" }}>
          {formatPercent(max)}
        </div>
        <div className="absolute left-full ml-2 text-xs" style={{ bottom: `${zeroPosition}%` }}>
          0%
        </div>
        <div className="absolute left-full ml-2 text-xs" style={{ bottom: "0%" }}>
          {formatPercent(min)}
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-600">{asset}</div>
    </div>
  );
}
