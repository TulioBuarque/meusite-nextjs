"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface Props {
  asset: string;
  min: number;
  max: number;
  current: number;
  open: number;
  className?: string;
}

export function ProfessionalDailyRange({
  asset,
  min,
  max,
  current,
  open,
  className,
}: Props) {
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

      const width = dimensions.width;
      const height = dimensions.height;
      canvasRef.current.width = width;
      canvasRef.current.height = height;

      // Background
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, width, height);

      const scale = (value: number) =>
        height - ((value - min) / (max - min)) * height;

      // Draw Range Line
      ctx.strokeStyle = "#cbd5e1";
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(width / 2, scale(min));
      ctx.lineTo(width / 2, scale(max));
      ctx.stroke();

      // Draw Levels
      drawLevel(ctx, width / 2, scale(min), "Min", min, "#ef4444");
      drawLevel(ctx, width / 2, scale(max), "Max", max, "#10b981");
      drawLevel(ctx, width / 2, scale(open), "Open", open, "#3b82f6");
      drawLevel(ctx, width / 2, scale(current), "Now", current, "#6366f1");
    }
  }, [dimensions, min, max, current, open]);

  return (
    <div className={cn("w-full", className)}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">{asset} Daily Range</h3>
      </div>
      <div
        ref={containerRef}
        className="h-[300px] w-full bg-white rounded-lg shadow overflow-hidden"
      >
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>
      <div className="mt-4 text-center text-sm text-muted-foreground">
        Change from open: {pipFromOpen.toFixed(1)} pips
      </div>
    </div>
  );
}

function drawLevel(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  label: string,
  value: number,
  color: string
) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, 5, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = color;
  ctx.font = "12px sans-serif";
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  ctx.fillText(`${label}: ${value.toFixed(5)}`, x + 10, y);
}
