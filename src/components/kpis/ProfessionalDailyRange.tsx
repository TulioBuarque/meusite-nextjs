"use client"

import { useState, useEffect } from "react"

interface ProfessionalDailyRangeProps {
  currentPercent: number
  highPercent: number
  lowPercent: number
  title?: string
}

export default function ProfessionalDailyRange({
  currentPercent = 0.25,
  highPercent = 0.65,
  lowPercent = -0.35,
  title = "Daily Range (Percentual)",
}: ProfessionalDailyRangeProps) {
  const [animatedPercent, setAnimatedPercent] = useState(0)

  const totalRange = highPercent - lowPercent
  const zeroPosition = ((0 - lowPercent) / totalRange) * 100
  const currentPosition = ((currentPercent - lowPercent) / totalRange) * 100

  const formatPercent = (value: number) => {
    const sign = value > 0 ? "+" : value < 0 ? "-" : "0"
    return `${sign}${Math.abs(value * 100).toFixed(2)}%`
  }

  useEffect(() => {
    const duration = 1500
    const startTime = performance.now()
    const startValue = animatedPercent

    const animate = (time: number) => {
      const elapsed = time - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)

      const newValue = startValue + (currentPercent - startValue) * easeProgress
      setAnimatedPercent(newValue)

      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [currentPercent])

  const markerPosition = 100 - currentPosition

  return (
    <div className="w-full max-w-md mx-auto">
      <h3 className="text-lg font-medium text-center mb-3">{title}</h3>
      <div className="relative aspect-[4/3] w-full">
        <svg viewBox="0 0 400 300" className="w-full h-full" style={{ filter: "drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.1))" }}>
          <defs>
            <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9333ea" />
              <stop offset="100%" stopColor="#7e22ce" />
            </linearGradient>
            <linearGradient id="tubeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.5)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.3)" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.3" />
            </filter>
          </defs>

          <rect x="0" y="0" width="400" height="300" rx="16" ry="16" fill="url(#purpleGradient)" />
          <path d="M0,300 L400,0" stroke="rgba(255,255,255,0.05)" strokeWidth="60" />
          <rect x="180" y="40" width="40" height="220" rx="20" ry="20" fill="url(#tubeGradient)" filter="url(#shadow)" />
          <rect x="190" y="50" width="20" height="200" rx="10" ry="10" fill="rgba(255,255,255,0.3)" />

          <g transform={`translate(0, ${40 + (100 - zeroPosition) * 2})`}>
            <line x1="170" y1="0" x2="230" y2="0" stroke="rgba(255,255,255,0.7)" strokeWidth="1" strokeDasharray="4 2" />
            <text x="240" y="4" fill="rgba(255,255,255,0.7)" fontSize="12">0%</text>
          </g>

          <g transform={`translate(0, ${40 + markerPosition * 2})`}>
            <rect x="160" y="-3" width="80" height="6" rx="3" ry="3" fill={currentPercent >= 0 ? "#22c55e" : "#ef4444"} filter="url(#glow)" />
            <circle cx="200" cy="0" r="4" fill="white" />
          </g>

          <g transform="translate(140, 70)">
            <text x="0" y="0" textAnchor="end" fill="rgba(255,255,255,0.9)" fontSize="14" fontWeight="500">High</text>
            <text x="0" y="20" textAnchor="end" fill="#22c55e" fontSize="16" fontWeight="bold">{formatPercent(highPercent)}</text>
          </g>

          <g transform={`translate(140, ${40 + markerPosition * 2})`}>
            <text x="0" y="0" textAnchor="end" fill="rgba(255,255,255,0.9)" fontSize="14" fontWeight="500">Current</text>
            <text x="0" y="20" textAnchor="end" fill={animatedPercent >= 0 ? "#22c55e" : "#ef4444"} fontSize="16" fontWeight="bold">
              {formatPercent(animatedPercent)}
            </text>
          </g>

          <g transform="translate(140, 230)">
            <text x="0" y="0" textAnchor="end" fill="rgba(255,255,255,0.9)" fontSize="14" fontWeight="500">Low</text>
            <text x="0" y="20" textAnchor="end" fill="#ef4444" fontSize="16" fontWeight="bold">{formatPercent(lowPercent)}</text>
          </g>

          <g transform={`translate(140, ${40 + (100 - zeroPosition) * 2})`}>
            <text x="0" y="0" textAnchor="end" fill="rgba(255,255,255,0.9)" fontSize="14" fontWeight="500">Open</text>
            <text x="0" y="20" textAnchor="end" fill="white" fontSize="16" fontWeight="bold">0.00%</text>
          </g>

          <rect x="195" y="50" width="5" height="200" rx="2.5" ry="2.5" fill="rgba(255,255,255,0.2)" />
        </svg>
      </div>
    </div>
  )
}
