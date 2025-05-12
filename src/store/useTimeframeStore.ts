import { create } from 'zustand'

export type Timeframe = '1M' | '5M' | '15M' | '30M' | '1H' | '4H' | 'D'

interface TimeframeState {
  selectedTimeframe: Timeframe
  setTimeframe: (value: Timeframe) => void
}

export const useTimeframeStore = create<TimeframeState>((set) => ({
  selectedTimeframe: '1M',
  setTimeframe: (value) => set({ selectedTimeframe: value }),
}))
