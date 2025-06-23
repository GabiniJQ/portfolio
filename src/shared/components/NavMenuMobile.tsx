import { cn } from '@/shared/utils/cn'
import { scrollToSection } from '@/shared/utils/scrollToSection'
import { useUIStore } from '@/store/useUIStore'
import { motion } from 'motion/react'
import { FaGithub } from 'react-icons/fa'
import { HiOutlineHome, HiOutlineMail, HiOutlineUser } from 'react-icons/hi'
import { PiProjectorScreenChartLight } from 'react-icons/pi'

const NavMenuMobile = () => {
  const { currentSection } = useUIStore((state) => state)

  return (
    <motion.nav
      className='relative flex flex-col items-center z-10'
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
    >
      <button
        className={cn('nav-btn', currentSection === 'home' && 'text-primary')}
        onClick={() => scrollToSection('home')}
      >
        <HiOutlineHome />
        Home
      </button>

      <button
        className={cn('nav-btn', currentSection === 'about' && 'text-primary')}
        onClick={() => scrollToSection('about')}
      >
        <HiOutlineUser />
        About me
      </button>

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

      <a
        href='https://github.com/GabiniJQ/'
        target='_blank'
        aria-label='Visit my Github profile'
      >
        <button className='nav-btn'>
          <FaGithub />
          Github
        </button>
      </a>
    </motion.nav>
  )
}

export default NavMenuMobile
