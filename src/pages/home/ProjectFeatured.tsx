import { cn } from '@/shared/utils/cn'
import type { ReactNode } from 'react'
import { FaGithub, FaLink } from 'react-icons/fa'

type ProjectFeaturedProps = {
  title: string
  imgSrc: string
  links: {
    github: string
    demo: string
  }
  description: ReactNode
  techStack: string[]
  side?: 'right' | 'left' | ''
}

const ProjectFeatured = ({
  title,
  imgSrc,
  description,
  links,
  techStack,
  side,
}: ProjectFeaturedProps) => {
  return (
    <div className='group relative flex flex-col justify-between gap-6 p-4 size-full min-h-[400px]  overflow-hidden bg-purple/20 rounded-md sm:px-10 featured-md'>
      {/* Image */}
      <div
        className={cn(
          'absolute top-0 left-0 size-full opacity-10 -z-10 transition md:rounded-xl overflow-hidden md:inline-block md:opacity-60 md:z-0 md:w-auto md:max-h-2/3 md:top-1/2 md:-translate-y-1/2',
          side === 'left' && 'right-0 left-auto'
        )}
      >
        <a href='https://wardo.vercel.app' className='z-10 group ' target='_blank' rel='noopener noreferrer'>
          <img src={imgSrc} alt={title} className='size-full object-cover transition grayscale-100 group-hover:grayscale-0' />
          <div className='absolute top-0 left-0 size-full bg-purple/40 transition group-hover:bg-transparent z-10'></div>
        </a>
      </div>

      <div
        className={cn(
          'flex flex-col justify-between gap-6  md:inline-block md:w-2/3 md:space-y-4 md:text-right md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:pointer-events-none',
          side === 'left' && 'md:text-left md:absolute md:left-0'
        )}
      >
        {/* Featured banner */}
        <div
          className={cn(
            'absolute top-0 left-0 w-full py-2 text-center text-accent bg-cyan-500 font-semibold md:text-right md:text-primary md:bg-transparent',
            side === 'left' && 'md:text-left'
          )}
        >
          Featured project
        </div>

        {/* Title */}
        <div className='mt-10'>
          <h2 className='text-2xl font-bold  transition '>{title}</h2>
        </div>

        {/* Description */}
        <div className='md:p-4 md:bg-purple'>
          <p className='transition  '>{description}</p>
        </div>

        {/* Tech stack */}
        <div className=' transition '>
          <p>{techStack.join(' - ')}</p>
        </div>

        {/* Demo & Github buttons */}
        <div
          className={cn(
            'flex justify-center gap-2 sm:justify-start md:justify-end',
            side === 'left' && 'md:justify-start'
          )}
        >
          <a href={links.github} target='_blank'>
            <button className='btn-outline bg-purple text-accent'>
              Repo
              <FaGithub />
            </button>
          </a>

          <a href={links.demo} target='_blank'>
            <button className='btn-primary'>
              Demo
              <FaLink />
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectFeatured
