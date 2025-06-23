export const featuredProjects = [
  {
    title: 'Wardo - E-commerce App',
    imgSrc: '/img/Wardo.webp',
    description: (
      <>
        Wardo is a{' '}
        <span className='text-primary'>full-stack e-commerce application</span>{' '}
        developed as a personal, educational project. It allows users to explore
        products, manage authentication, simulate purchases, and more.
      </>
    ),
    techStack: [
      'React',
      'TypeScript',
      'Redux Toolkit',
      'TailwindCSS',
      'Express',
      'MongoDB',
      'JWT',
    ],
    links: {
      github: 'https://github.com/GabiniJQ/wardo-ecommerce-app',
      demo: 'https://wardo.vercel.app/',
    },
  },
  {
    title: 'Evogym Landing Page',
    imgSrc: '/img/Evogym.webp',
    description: (
      <>
        <span className='text-primary'>Landing website</span> for a gym.
        Features the use of Framer Motion for{' '}
        <span className='text-primary'>smooth animations</span> and a responsive
        layout.
      </>
    ),
    techStack: ['React', 'TypeScript', 'TailwindCSS', 'Motion'],
    links: {
      github: 'https://github.com/GabiniJQ/gym-app-typescript',
      demo: 'https://gym-app-typescript-j9i.pages.dev/',
    },
  },
  {
    title: 'Personal Portfolio',
    imgSrc: '/img/Portfolio.webp',
    description: (
      <>
        A <span className='text-primary'>responsive</span> and modern portfolio
        built with <span className='text-primary'>React</span>, featuring
        animated transitions using{' '}
        <span className='text-primary'>Framer Motion</span>, section-based
        navigation, and a clean, accessible design to showcase my work and
        skills as a fullstack web developer.
      </>
    ),
    techStack: ['React', 'TypeScript', 'TailwindCSS', 'Motion'],
    links: {
      github: 'https://github.com/GabiniJQ/gym-app-typescript',
      demo: 'https://gym-app-typescript-j9i.pages.dev/',
    },
  },
]

export const moreProjects = [
  {
    title: 'Assembly: Endgame',
    imgSrc: '/img/Assembly.webp',
    description: (
      <>
        A classic <span className='text-primary'>word-guessing game</span> built
        with <span className='text-primary'>React</span>. Try to guess the
        secret word in under 8 attempts. Each language before Assembly
        represents a chance to fail.
      </>
    ),
    techStack: ['React', 'CSS', 'HTML'],
    links: {
      github: 'https://github.com/GabiniJQ/assembly-hangman',
      demo: 'https://assembly-hangman.pages.dev/',
    },
  },
  {
    title: 'Chef Claude',
    imgSrc: '/img/Chef.webp',
    description: (
      <>
        A kitchen <span className='text-primary'>AI assistant</span> that helps
        you choose a recipe according to your cooking ingredients.
      </>
    ),
    techStack: ['React', 'CSS', 'HTML'],
    links: {
      github: 'https://github.com/GabiniJQ/Chef-Claude',
      demo: 'https://chef-claude.pages.dev/',
    },
  },
]
