import NavMenuDesktop from '@/shared/components/NavMenuDesktop'
import NavMenu from '@/shared/components/NavMenuMobile'
import useScreenSize from '@/shared/hooks/useScreenSize'
import { cn } from '@/shared/utils/cn'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isTopScreen, setIsTopScreen] = useState(window.pageYOffset === 0)

  const isMobile = useScreenSize()

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset === 0) {
        setIsTopScreen(true)
      } else {
        setIsTopScreen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className='fixed top-0 w-full z-40'>
      <div className='relative flex justify-between pr-6 h-20 transition md:px-10 2xl:justify-evenly'>
        {/* Blur background */}
        <div
          className={cn(
            'absolute left-0 top-0 size-full z-10 pointer-events-none transition',
            isTopScreen && 'bg-cyan-950 md:bg-transparent',
            !isTopScreen && 'nav-blur',
            mobileMenuOpen && 'scale-y-[700%]',
            isMobile && !mobileMenuOpen && 'scale-y-[100%]'
          )}
        ></div>

        {/* Logo */}
        <div className='flex items-center justify-center z-10'>
          <img
            src='/img/jq-logo.png'
            alt='Jose Quintana Logo'
            className='h-[70px]'
          />
        </div>

        {/* DESKTOP: Right side menu */}
        {!isMobile && <NavMenuDesktop />}

        {/* MOBILE: Menu */}
        {isMobile && (
          <div className='flex items-center justify-center z-10'>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className=''
            >
              {mobileMenuOpen && <FaX className='size-8 text-primary ' />}

              {!mobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, rotate: 0 }}
                  animate={{ opacity: 1, rotate: 180 }}
                  transition={{ duration: 0.4 }}
                >
                  <FaBars className='size-8 text-primary' />
                </motion.div>
              )}
            </button>
          </div>
        )}
      </div>

      {/* MOBILE: Mobile Menu */}
      {mobileMenuOpen && isMobile && <NavMenu />}
    </header>
  )
}

export default Navbar
