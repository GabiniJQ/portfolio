// SectionObserver.tsx (reusable wrapper)
import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'
import { useUIStore } from '@/store/useUIStore'

type Props = {
  sectionId: string // e.g. 'about', 'projects', etc.
  children: React.ReactNode
}

export default function SectionObserver({ sectionId, children }: Props) {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-40% 0px -40% 0px', once: false })
  const setCurrentSection = useUIStore((s) => s.setCurrentSection)

  useEffect(() => {
    const current = useUIStore.getState().currentSection

    if (isInView && current !== sectionId) {
      setCurrentSection(sectionId)
    }
  }, [isInView, sectionId, setCurrentSection])

  return (
    <section ref={ref} className=''>
      {children}
    </section>
  )
}
