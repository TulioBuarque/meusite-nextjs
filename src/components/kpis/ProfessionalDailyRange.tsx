"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface DailyRangeProps {
  asset: string;
  date?: string;
  min: number;
  max: number;
  current: number;
  open: number;
  className?: string;
}

export function ProfessionalDailyRange({
  asset,
  date = new Date().toLocaleDateString(),
  min,
  max,
  current,
  open,
  className,
}: DailyRangeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const changeFromOpen = current - open;
  const pipFromOpen = changeFromOpen * 10000;

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        });
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (canvasRef.current && dimensions.width > 0) {
      const ctx = canvasRef.current.getContext("2d");
      if (!ctx) return;
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      ctx.fillStyle = "#e2e8f0";
      ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
  }, [dimensions]);

  return (
    <div className={cn("w-full", className)}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">{asset}</h3>
        <span className="text-sm text-muted-foreground">{date}</span>
      </div>

      <div ref={containerRef} className="h-[300px] w-full bg-white rounded-lg shadow overflow-hidden">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>

      <div className="mt-4 text-center text-sm text-muted-foreground">
        Change from open: {pipFromOpen.toFixed(1)} pips
      </div>
    </div>
  );
}
