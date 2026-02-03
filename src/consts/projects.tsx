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
    title: 'PetCare Landing Page',
    imgSrc: '/img/Petcare.webp',
    description: (
      <>
        Modern <span className='text-primary'>landing website</span> for a an
        application that connects pet owners with trusted caregivers. Features
        the use of Framer Motion for{' '}
        <span className='text-primary'>smooth animations</span> and a responsive
        layout.
      </>
    ),
    techStack: ['React', 'TypeScript', 'TailwindCSS', 'Motion'],
    links: {
      github: 'https://github.com/GabiniJQ/petcare',
      demo: 'https://petcare-six-kohl.vercel.app/',
    },
  },
  {
    title: 'Searchmantic',
    imgSrc: '/img/Searchmantic.webp',
    description: (
      <>
        A <span className='text-primary'>search engine</span> that combines
        full-text search with semantic vector search to deliver rich and
        relevant search results. It features a unified search bar UI that uses
        both traditional <span className='text-primary'>SQL-based</span> text
        matching and modern embedding-based similarity using{' '}
        <span className='text-primary'>vector indexes</span>.
      </>
    ),
    techStack: ['NextJS', 'DrizzelORM', 'Upstash', 'PostgreSQL'],
    links: {
      github: 'https://github.com/GabiniJQ/Searchmantic',
      demo: 'https://searchmantic.vercel.app/',
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
]
