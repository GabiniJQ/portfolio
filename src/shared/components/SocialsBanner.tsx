import { motion } from 'motion/react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

const SocialsBanner = () => {
  return (
    <motion.div
      className='flex justify-center items-center gap-10 text-purple transition-all 2xl:flex-col'
    >
      <a href='https://github.com/GabiniJQ' target='blank_'>
        <FaGithub className='size-8 cursor-pointer hover:text-white' />
      </a>

      <a href='https://www.linkedin.com/in/joseguardoq/' target='blank_'>
        <FaLinkedin className='size-8 cursor-pointer hover:text-white' />
      </a>

      <a href='mailto:joseguardoq@gmail.com'>
        <SiGmail className='size-8 cursor-pointer hover:text-white' />
      </a>

    </motion.div>
  )
}

export default SocialsBanner
