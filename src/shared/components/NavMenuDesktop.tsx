import { cn } from '@/shared/utils/cn'
import { scrollToSection } from '@/shared/utils/scrollToSection'
import { useUIStore } from '@/store/useUIStore'
import { motion } from 'motion/react'
import { FaGithub } from 'react-icons/fa'
import { HiOutlineHome, HiOutlineMail, HiOutlineUser } from 'react-icons/hi'
import { PiProjectorScreenChartLight } from 'react-icons/pi'

const NavMenuDesktop = () => {
  const currentSection = useUIStore((state) => state.currentSection)

  return (
    <motion.nav
      className='relative flex items-center z-10 xl:gap-6 '
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
    >
      <a>
        <button
          className={cn('nav-btn', currentSection === 'home' && 'text-primary')}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <HiOutlineHome />
          Home
        </button>
      </a>

      <a>
        <button
          className={cn(
            'nav-btn',
            currentSection === 'about' && 'text-primary'
          )}
          onClick={() => scrollToSection('about')}
        >
          <HiOutlineUser />
          About me
        </button>
      </a>

      <a>
        <button
          className={cn(
            'nav-btn',
            currentSection === 'projects' && 'text-primary'
          )}
          onClick={() => scrollToSection('projects')}
        >
          <PiProjectorScreenChartLight />
          Projects
        </button>
      </a>

      <a>
        <button
          className={cn(
            'nav-btn',
            currentSection === 'contact' && 'text-primary'
          )}
          onClick={() => scrollToSection('contact')}
        >
          <HiOutlineMail />
          Contact
        </button>
      </a>

      <a href='https://github.com/GabiniJQ/' target='_blank'>
        <button className='nav-btn'>
          <FaGithub />
          Github
        </button>
      </a>
    </motion.nav>
  )
}

export default NavMenuDesktop
