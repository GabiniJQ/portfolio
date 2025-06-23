import { cn } from '@/shared/utils/cn'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { CgChevronUp } from 'react-icons/cg'

const ScrollToTop = () => {
  const [scrolledDown, setScrolledDown] = useState(window.scrollY > 2200)

  useEffect(() => {
    const handleScroll = () => {
      setScrolledDown(window.scrollY > 2200)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {scrolledDown && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={cn(
            'fixed right-6 bottom-10 p-4 rounded-full bg-primary text-accent z-10 btn transition hover:bg-cyan-100'
          )}
          key='scrollTop'
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.5,
          }}
        >
          <CgChevronUp className='size-6' />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop
