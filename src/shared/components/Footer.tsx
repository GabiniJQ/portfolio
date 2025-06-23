import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='relative flex flex-col p-6 text-center text-sm bg-black/40 translate-y-1 overflow-hidden sm:flex-row sm:gap-10 sm:justify-center'>
      <div className='absolute top-0 left-0 -z-10'>
        <img
          src='/img/jq-logo-white.png'
          alt='Jose Quintana Logo'
          className='w-40 opacity-20 sm:-translate-y-20 sm:w-[400px]'
        />
      </div>

      <div className='space-y-1 '>
        <p>Designed and developed by Jose Quintana</p>

        <p>Copyright © 2025 Jose Quintana</p>
      </div>

      <div className='flex gap-2 justify-center items-center mt-3 '>
        <a href='https://www.linkedin.com/in/joseguardoq/' target='_blank'>
          <FaLinkedinIn className='hover:scale-125 transition' />
        </a>

        <a href='https://github.com/GabiniJQ' target='_blank'>
          <FaGithub className='hover:scale-125 transition' />
        </a>
      </div>
    </div>
  )
}

export default Footer
