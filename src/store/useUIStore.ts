import { create } from 'zustand'
import { combine } from 'zustand/middleware'

export const useUIStore = create(
  combine({ currentSection: 'home' as string }, (set) => ({
    setCurrentSection: (section: string) => set({ currentSection: section }),
  }))
)
