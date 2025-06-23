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
}

const ProjectFeatured = ({
  title,
  imgSrc,
  description,
  links,
  techStack,
}: ProjectFeaturedProps) => {
  return (
    <div className='group relative flex flex-col justify-between gap-6 p-4 size-full min-h-[400px]  overflow-hidden bg-purple/20 rounded-md shadow-xl shadow-black/30 sm:px-10'>
      {/* Image */}
      <div className='absolute top-0 left-0 size-full opacity-10 -z-10 transition group-hover:opacity-90'>
        <img src={imgSrc} alt={title} className='size-full object-cover' />
      </div>

      {/* Featured banner */}
      <div className='absolute top-0 left-0 w-full py-2 text-center text-accent bg-cyan-500 font-semibold'>
        Featured project
      </div>

      {/* Title */}
      <div className='mt-10'>
        <h2 className='text-2xl font-bold  transition group-hover:opacity-0'>{title}</h2>
      </div>

      {/* Description */}
      <div>
        <p className='sm:text-xl transition group-hover:opacity-0'>{description}</p>
      </div>

      {/* Tech stack */}
      <div className=' transition group-hover:opacity-0'>
        <p>{techStack.join(' - ')}</p>
      </div>

      {/* Demo & Github buttons */}
      <div className='flex justify-center gap-2 sm:justify-start'>
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
  )
}

export default ProjectFeatured
