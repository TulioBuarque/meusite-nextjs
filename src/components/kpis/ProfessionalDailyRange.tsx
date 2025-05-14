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

  const percentFromOpen = ((current - open) / open) * 100;
  const percentMin = ((min - open) / open) * 100;
  const percentMax = ((max - open) / open) * 100;
  const percentCurrent = percentFromOpen;

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

      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, width, height);

      const scale = (percent: number) => {
        const range = percentMax - percentMin || 1; // avoid division by zero
        return height - ((percent - percentMin) / range) * height;
