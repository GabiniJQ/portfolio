import type { ReactNode } from 'react'
import { FaGithub, FaLink } from 'react-icons/fa'

type ProjectRegularProps = {
  title: string
  imgSrc: string
  description: ReactNode
  techStack: string[]
  links: {
    github: string
    demo: string
  }
}

const ProjectRegular = ({
  title,
  imgSrc,
  description,
  links,
  techStack,
}: ProjectRegularProps) => {
  return (
    <div className='group flex flex-col size-full min-h-[300px] border border-primary overflow-hidden bg-purple/20  rounded md:p-6'>
      {/* Image */}
      <div className='h-1/2 hidden md:block'>
        <img src={imgSrc} alt={title} className='size-full opacity-50 transition group-hover:opacity-100'/>
      </div>

      <div className='flex flex-col justify-between p-4 h-1/2 min-h-[300px]'>
        {/* Title */}
        <h2 className='text-2xl'>{title}</h2>

        {/* Description */}
        <div>
          <p>{description}</p>
        </div>

        {/* Tech stack */}
        <div>
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
    </div>
  )
}

export default ProjectRegular
