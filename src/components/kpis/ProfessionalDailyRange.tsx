'use client'

import { useState, useEffect, useRef } from 'react'

interface DailyRangeData {
  asset: string
  date: string
  open: number
  high: number
  low: number
  current: number
}

interface ProfessionalDailyRangeProps {
  data?: DailyRangeData
  title?: string
  refreshInterval?: number
  onDataRequest?: () => Promise<DailyRangeData>
}

export default function ProfessionalDailyRange({
  data,
  title = 'Daily Range (Percentual)',
  refreshInterval = 0,
  onDataRequest,
}: ProfessionalDailyRangeProps) {
  const [chartData, setChartData] = useState<DailyRangeData | null>(data || null)

  const [calculatedValues, setCalculatedValues] = useState({
    currentPercent: 0,
    highPercent: 0,
    lowPercent: 0,
    currentPips: 0,
    highPips: 0,
    lowPips: 0,
  })

  const [animatedPercent, setAnimatedPercent] = useState(0)
  const [animatedPips, setAnimatedPips] = useState(0)

  const prevPercent = useRef(0)
  const prevPips = useRef(0)

  useEffect(() => {
    if (!chartData) return

    const { open, high, low, current } = chartData
    const highPercent = ((high - open) / open) * 100
    const lowPercent = ((low - open) / open) * 100
    const currentPercent = ((current - open) / open) * 100
    const pipMultiplier = 10000
    const highPips = Math.round((high - open) * pipMultiplier)
    const lowPips = Math.round((low - open) * pipMultiplier)
    const currentPips = Math.round((current - open) * pipMultiplier)

    setCalculatedValues({
      highPercent,
      lowPercent,
      currentPercent,
      highPips,
      lowPips,
      currentPips,
    })

    prevPercent.current = animatedPercent
    prevPips.current = animatedPips
    animateToNewValues(currentPercent, currentPips)
  }, [chartData])

  useEffect(() => {
    if (!refreshInterval || !onDataRequest) return

    const fetchData = async () => {
      try {
        const newData = await onDataRequest()
        setChartData(newData)
      } catch (error) {
        console.error('Failed to fetch updated data:', error)
      }
    }

    if (!chartData && onDataRequest) {
      fetchData()
    }

    const intervalId = setInterval(fetchData, refreshInterval)
    return () => clearInterval(intervalId)
  }, [refreshInterval, onDataRequest, chartData])

  useEffect(() => {
    if (data) {
      setChartData(data)
    }
  }, [data])

  const animateToNewValues = (targetPercent: number, targetPips: number) => {
    const duration = 1000
    const startTime = performance.now()
    const startPercent = prevPercent.current
    const startPips = prevPips.current

    const animate = (time: number) => {
      const elapsed = time - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      setAnimatedPercent(startPercent + (targetPercent - startPercent) * easeProgress)
      setAnimatedPips(startPips + (targetPips - startPips) * easeProgress)
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }

  const formatPercent = (value: number) => `${value > 0 ? '+' : ''}${value.toFixed(2)}%`
  const formatPips = (value: number) => `${value > 0 ? '+' : ''}${value} pips`
  const formatPrice = (value: number) => value.toFixed(4)

  if (!chartData) {
    return <div className="text-center text-gray-500">Carregando dados...</div>
  }

  const { highPercent, lowPercent, currentPercent } = calculatedValues
  const totalRange = highPercent - lowPercent || 1
  const zeroPosition = ((0 - lowPercent) / totalRange) * 100
  const currentPosition = ((currentPercent - lowPercent) / totalRange) * 100
  const markerPosition = 100 - currentPosition

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-4 border-b border-gray-100">
        <h3 className="text-lg font-semibold text-center text-gray-800">
          {title} - {chartData.asset}
        </h3>
        <p className="text-sm text-center text-gray-500 mt-1">
          {new Date(chartData.date).toLocaleDateString()}
        </p>
      </div>
      <div className="relative h-64 w-12 flex flex-col items-center justify-between mx-auto">
        <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-300 transform -translate-x-1/2"></div>

        <div className="absolute left-1/2 transform -translate-x-1/2 bg-green-500 w-2 h-2 rounded-full" style={{ bottom: `${markerPosition}%` }}></div>

        <div className="absolute left-full ml-2 text-xs" style={{ bottom: '100%' }}>{formatPercent(highPercent)}</div>
        <div className="absolute left-full ml-2 text-xs" style={{ bottom: `${zeroPosition}%` }}>0%</div>
        <div className="absolute left-full ml-2 text-xs" style={{ bottom: '0%' }}>{formatPercent(lowPercent)}</div>
      </div>
    </div>
  )
}
