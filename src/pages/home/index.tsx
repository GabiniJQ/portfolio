import { featuredProjects, moreProjects } from '@/consts/projects'
import ProyectFeatured from '@/pages/home/ProjectFeatured'
import ProjectRegular from '@/pages/home/ProjectRegular'
import Skill from '@/pages/home/Skill'
import { skills, tools } from '@/pages/home/SkillIconsAndTools'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { motion } from 'motion/react'
import SectionObserver from '@/pages/home/SectionObserver'
import { scrollToSection } from '@/shared/utils/scrollToSection'
import SeparatorHeader from '@/shared/components/SeparatorHeader'
import SocialsBanner from '@/shared/components/SocialsBanner'

const HomePage = () => {
  return (
    <div className='flex flex-col' id='home'>
      {/* -----Hero section-------- */}
      <SectionObserver sectionId='home'>
        <motion.div 
          className='relative flex flex-col justify-center gap-10 min-h-screen 2xl:flex-row 2xl:items-center'
        >
          {/* Hero text*/}
          <motion.div
            className='flex flex-col gap-4 text-secondary'
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.1 }
              }
            }}
            transition={{ ease: [0, 0.5, 0.4, 0.5] }}
            
          >
            <motion.div
              className='flex flex-col gap-4'
              variants={{
                hidden: { opacity: 0, x: -50 },
                show: { opacity: 1, x: 0 },
              }}
            >
              {/* Title */}
              <p className='text-lg text-secondary'>¡Hola! my name is</p>
              <h1 className='text-5xl font-bold text-secondary sm:text-7xl'>
                <span className='text-primary'>Jose Quintana.</span>
              </h1>

              {/* Subtitle */}
              <p className='text-4xl font-bold sm:text-6xl'>
                <span className='text-purple'>
                  I like to build sites and apps.
                </span>
              </p>
            </motion.div>

            <motion.p
              className='text-lg  text-secondary max-w-[500px]'
              variants={{
                hidden: { opacity: 0, x: -50 },
                show: { opacity: 1, x: 0 },
              }}
            >
              I'm a{' '}
              <span className='text-primary'>Fullstack Web Developer</span>{' '}
              focused on building modern web applications with{' '}
              <span className='text-primary'>React</span> on the frontend and{' '}
              <span className='text-primary'>Node.js</span> on the backend.
            </motion.p>

            {/* Navigate to projects */}
            <motion.div
              className='flex gap-4 mt-10'
              variants={{
                hidden: { opacity: 0, x: -50 },
                show: { opacity: 1, x: 0 },
              }}
            >
              <button
                className='btn-outline'
                onClick={() => scrollToSection('projects')}
              >
                See what i've built
              </button>
            </motion.div>
          </motion.div>

          <SocialsBanner />
        </motion.div>
      </SectionObserver>

      {/* --------About me section-------- */}
      <SectionObserver sectionId='about'>
        <div className='flex flex-col gap-6 pt-10 pb-20' id='about'>
          {/* Separator Header */}
          <SeparatorHeader title='About me' />

          <div className='flex flex-col gap-6 md:flex-row md:gap-10'>
            <div className='flex flex-col gap-6 md:w-2/3'>
              <p>
                I'm <span className='bold-primary'>Jose Quintana</span> from{' '}
                <span className='bold-primary'>Cartagena, Colombia</span>. I
                started coding out of an interest for tech and a desire to
                create solutions that help people.
              </p>

              <p>
                I'm studying{' '}
                <span className='bold-primary'>Software Engineering</span>, but
                I'm also very self-taught, driven, and a quick learner.
              </p>

              <p>
                I speak <span className='bold-primary'>English fluently</span>,
                and I'm learning Portuguese and Japanese as a hobby. In my free
                time, I enjoy competitive gaming as well.
              </p>
              <p>
                I'm also interested in expanding my skills into cloud
                development (AWS) and exploring how to integrate AI into web
                applications.
              </p>
            </div>

            {/* Photo */}
            <motion.div className='flex items-center justify-center md:w-1/3'>
              <motion.div
                className='bg-purple/40 overflow-hidden rounded-md max-w-[350px]'
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
              >
                <img
                  src='/img/profile-photo.png'
                  alt='Jose Profile Photo'
                  className='size-full'
                />
              </motion.div>
            </motion.div>
          </div>

          <div className='grid my-20 md:grid-cols-3 md:gap-10'>
            {/* Skillset */}
            <div className='md:col-span-2'>
              <h1 className='section-title'>
                <span className='text-purple'>Skill</span>set
              </h1>

              <motion.div
                className='grid grid-cols-3 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5'
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.4 }}
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
                transition={{ ease: [0, 0.5, 0.4, 0.5] }}
              >
                {skills.map((skill) => (
                  <Skill
                    key={skill.name}
                    className='last:col-start-2 md:last:col-auto md:nth-last-[2]:col-start-2 xl:nth-last-[2]:col-start-auto max-w-[220px]'
                    Icon={skill.icon}
                    name={skill.name}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { opacity: 1, y: 0 },
                    }}
                  />
                ))}
              </motion.div>
            </div>

            {/* Tools */}
            <div className='relative'>
              {/* Left border separator */}
              <div className='hidden absolute -left-4 h-full border-l border-purple md:block'></div>

              <h1 className='section-title text-purple'>Tools</h1>

              <div className='grid grid-cols-2 gap-4 md:'>
                {tools.map((tool) => (
                  <Skill key={tool.name} Icon={tool.icon} name={tool.name} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionObserver>

      {/* ----------Projects Section---------- */}
      <SectionObserver sectionId='projects'>
        <div className='flex flex-col gap-6 pt-20' id='projects'>
          {/* Separator Header */}
          <SeparatorHeader title='Projects' />

          <div className='grid gap-6'>
            {featuredProjects.map((project, i) => {
              const isEven = i % 2 === 0
              return (
              <ProyectFeatured
                key={project.title}
                title={project.title}
                imgSrc={project.imgSrc}
                links={{
                  demo: project.links.demo,
                  github: project.links.github,
                }}
                description={project.description}
                techStack={project.techStack}
                side={isEven ? 'left' : ''}
              />
            )
            })}
          </div>

          {/* Other projects */}
          <h2 className='my-10 text-3xl text-center'>
            Other <span className='text-purple'>projects</span>
          </h2>

          <div className='grid gap-6 md:grid-cols-2 lg:px-20'>
            {moreProjects.map((project) => (
              <ProjectRegular
                key={project.title}
                title={project.title}
                description={project.description}
                imgSrc={project.imgSrc}
                links={project.links}
                techStack={project.techStack}
              />
            ))}
          </div>
        </div>
      </SectionObserver>

      {/* Contact section */}
      <SectionObserver sectionId='contact'>
        <div
          className='flex flex-col gap-6 py-40 justify-center items-center'
          id='contact'
        >
          {/* Separator Header */}
          <SeparatorHeader title='Contact me' />

          <p className='text-2xl max-w-[450px]'>
            Want to hear about me or ask me a question?
            <span className='text-primary'> Get in touch</span> with me at{' '}
            <a
              href='mailto:joseguardoq@gmail.com'
              className='text-primary hover:text-purple'
            >
              joseguardoq@gmail.com
            </a>
            .
          </p>

          <p className='text-2xl'></p>

          <motion.div className='flex flex-col gap-4 items-center'>
            <a href='mailto:joseguardoq@gmail.com'>
              <button className='btn-outline text-xl sm:max-w-fit sm:scale-125'>
                Let's talk
              </button>
            </a>

            <div className='flex gap-6 justify-center items-center'>
              <a
                href='https://www.linkedin.com/in/joseguardoq/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Visit my Linkedin profile'
              >
                <FaLinkedinIn className='size-10 hover:scale-125 transition' />
              </a>

              <a
                href='https://github.com/GabiniJQ'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Visit my GitHub profile'
              >
                <FaGithub className='size-10 hover:scale-125 transition' />
              </a>
            </div>
          </motion.div>
        </div>
      </SectionObserver>
    </div>
  )
}

export default HomePage
