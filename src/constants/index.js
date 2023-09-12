import {
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextjs,
  redux,
  tailwind,
  phone,
  server,
  embedded,
  nodejs,
  mongodb,
  python,
  mySQL,
  dart,
  flutter,
  kotlin,
  tensorflow,
  c,
  cpp,
  linux,
  network,
  solidworks,
  arduino,
  raspberryPi,
  additivemanufacturing,
  aws,
  docker,
  git,
  opg,
  cw,
  western,
  ecommerce,
  velocityvoyage,
  sociopedia,
  fourDoFRobot,
  partCollectingRobot,
  pathFollowingRobot,
  location,
  mail,
  linkedin,
  githubsvg,
  docicon,
  expressjs,
  postgreSQL,
  supabase,
  spotifyClone,
  netflixClone,
  smartWindows,
  ecommerceStore,
  ecommerceAdmin,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const about = `I'm Keeshigan Pirabaharan, a 24-year-old Mechatronics/Software 
engineer with experience in creating innovative solutions that seamlessly integrate 
both Frontend and Backend technologies.  I'm a quick learner with the willingness to 
learn new technologies to create efficient and scalable solutions that solve real-world 
problems.`;

const opportunity = `I am actively seeking opportunities in full-stack development starting from June 26th, 2023.`;

const typedHero = [
  'I am a Full Stack Developer',
  1000,
  'I am a Mobile App Developer',
  1000,
  'I am an Embedded Systems Engineer',
  1000,
  'I am a Mechatronics/Software Engineer',
  5000,
];

const services = [
  {
    title: 'Frontend Developer',
    icon: web,
  },
  {
    title: 'Backend Developer',
    icon: server,
  },
  {
    title: 'Mobile Developer',
    icon: phone,
  },
  {
    title: 'Embedded Systems Developer',
    icon: embedded,
  },
];

const frontEndDev = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React.js',
    icon: reactjs,
  },
  {
    name: 'Next.js',
    icon: nextjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
];

const backEndDev = [
  {
    name: 'Node.js',
    icon: nodejs,
  },
  {
    name: 'Express.js',
    icon: expressjs,
  },

  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'MySQL',
    icon: mySQL,
  },
  {
    name: 'PostgreSQL',
    icon: postgreSQL,
  },
  {
    name: 'Supabase',
    icon: supabase,
  },
];

const mobileDev = [
  {
    name: 'Dart',
    icon: dart,
  },
  {
    name: 'Flutter',
    icon: flutter,
  },
  {
    name: 'Kotlin',
    icon: kotlin,
  },
];

const embeddedDev = [
  {
    name: 'C',
    icon: c,
  },
  {
    name: 'C++',
    icon: cpp,
  },
  {
    name: 'Linux',
    icon: linux,
  },
  {
    name: 'Network Protocols',
    icon: network,
  },
];

const mechatronicsDev = [
  {
    name: 'SolidWorks',
    icon: solidworks,
  },
  {
    name: 'Arduino',
    icon: arduino,
  },
  {
    name: 'Raspberry Pi',
    icon: raspberryPi,
  },
  {
    name: '3D Printing',
    icon: additivemanufacturing,
  },
];

const dataScience = [
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Tensorflow',
    icon: tensorflow,
  },
];

const otherTech = [
  {
    name: 'AWS',
    icon: aws,
  },
  {
    name: 'Docker',
    icon: docker,
  },
  {
    name: 'Git',
    icon: git,
  },
];

const experiences = [
  {
    title: 'Software Developer',
    company_name: 'Curtiss-Wright',
    location: 'Ottawa, ON',
    icon: cw,
    iconBg: '#e51938',
    date: 'June 2022 - Present',
    points: [
      `Developed automated test software using C and Bash Scripts to perform qualification testing on a vehicle management computer / network switch hybrid device`,
      `Collaborated with hardware engineers to optimize system performance and reliability`,
      `Created and maintained software documentation, including design specifications, code documentation, and user manuals`,
      `Participated in code reviews and worked with other developers to ensure software quality and adherence to coding standards`,
    ],
  },
  {
    title: 'Modifcations Team Lead (Internship)',
    company_name: 'Ontario Power Generation',
    location: 'Pickering, ON',
    icon: opg,
    iconBg: '#FFFFFF',
    date: 'July 2020 - July 2021',
    points: [
      `Managed small scale projects (< $200k) requiring engineering changes to the plant`,
      `Assisted senior project managers with capital project (>$200k), including coordination with internal stakeholder and EPC contractors to ensure project success`,
      `Exposure to industrial operations, complex system processes, and practical failure modes`,
      `Worked with a multidisciplinary team of engineers and technicians to support modifications`,
    ],
  },
];

const education = {
  university: 'Western University',
  location: 'London, ON',
  icon: western,
  degree: 'B.E.Sc Mechatronics Engineering',
  date: '2017 - 2022',
};

const projects = [
  {
    name: 'E-Commerce Store',
    description: `Developed a full-fledged e-commerce store website, including an 
    integrated admin dashboard, using Next.js, Shadcn, Tailwind CSS, and Stripe 
    for payment processing.`,
    image: ecommerceStore,
    source_code_link: 'https://github.com/kpirabaharan/E-Commerce-Store',
    website_link: 'https://e-commerce-store-clothes-kpirabaharan.vercel.app/',
    website_link_2: 'https://e-commerce-store-shoes-kpirabaharan.vercel.app/',
  },
  {
    name: 'E-Commerce Admin Dashboard',
    description: `Built a robust e-commerce admin dashboard site, leveraging Next.js, 
    Shadcn, Tailwind CSS, AWS RDS, and S3 for seamless and efficient store management`,
    image: ecommerceAdmin,
    source_code_link:
      'https://github.com/kpirabaharan/E-Commerce-Admin-Dashboard',
    website_link: 'https://e-commerce-admin-dashboard-kpirabaharan.vercel.app/',
  },
  {
    name: 'Netflix Clone',
    description: `Full-stack Netflix clone built with Next.js, replicating the core 
    features of the popular movie streaming platform.`,
    image: netflixClone,
    source_code_link: 'https://github.com/kpirabaharan/Netflix-Clone',
    website_link: 'https://netflix-clone-kpirabaharan.vercel.app',
  },
  {
    name: 'Spotify Clone',
    description: `Full-stack Spotify clone built with Next.js, replicating the core 
    features of the popular music streaming platform.`,
    image: spotifyClone,
    source_code_link: 'https://github.com/kpirabaharan/Spotify-Clone',
    website_link: 'https://spotify-clone-kpirabaharan.vercel.app',
  },
  {
    name: 'Smart Windows + Blinders',
    description: `Collaborated on the Smart Windows Raspberry Pi Project, optimizing 
    window control through embedded systems, sensors, and an Android app, featuring Manual, 
    Smart, and Automatic modes, plus geofencing for efficiency.`,
    image: smartWindows,
    source_code_link: 'https://github.com/kpirabaharan/Smart-Windows-App',
    website_link: 'https://www.youtube.com/watch?v=4RYRujc7fvM',
  },
  {
    name: '4 DOF Robot',
    description: `Built and programmed a 4-DoF robotic arm as a mechatronic project, 
      capable of precise and coordinated movements for various applications.`,
    image: fourDoFRobot,
    source_code_link: 'https://github.com/kpirabaharan/Four-DOF-Robot',
  },
  {
    name: 'Velocity Voyage',
    description: `The endless runner video game, created with Unity, offers players an exciting 
      and challenging experience as they run and dodge obstacles for as long as possible.`,
    image: velocityvoyage,
    source_code_link: 'https://github.com/kpirabaharan/Velocity-Voyage',
  },
  {
    name: 'Tech Trendz',
    description: `This Web/Mobile application utilizes Stripe API to provide a secure online 
      shopping experience for users to purchase technology products with confidence.`,
    image: ecommerce,
    source_code_link: 'https://github.com/kpirabaharan/E-Commerce',
  },
  {
    name: 'Sociopedia',
    description: `The full-stack social media app provides users with a comprehensive 
      platform to connect, communicate, and share content with others in a seamless and 
      engaging manner.`,
    image: sociopedia,
    source_code_link: 'https://github.com/kpirabaharan/Social-Media-App',
  },
  {
    name: 'Part Collecting Robot',
    description: `Autonomous part collecting robot navigating dynamic environments, 
    avoiding obstacles, and efficiently collecting objects for streamlined operations.`,
    image: partCollectingRobot,
    source_code_link:
      'https://github.com/kpirabaharan/Autonomous-Part-Collecting-Robot',
  },
  {
    name: 'Path Following Robot',
    description: `Autonomous line-following robot project designed to deliver 
    objects to a specific destination by accurately following a predefined path.`,
    image: pathFollowingRobot,
    website_link: 'https://www.youtube.com/watch?v=JBqL7PEfFzk',
  },
];

const contactInfo = [
  {
    name: 'Email',
    image: mail,
    value: 'kpirabaharan3@gmail.com',
    href: 'mailto:kpirabaharan3@gmail.com',
    link: true,
  },
  {
    name: 'Phone',
    image: phone,
    value: '+1 416 617 3498',
    href: 'tel:4166173498',
    link: true,
  },
  {
    name: 'LinkedIn',
    image: linkedin,
    value: 'kpirabaharan',
    href: 'https://www.linkedin.com/in/kpirabaharan/',
    link: true,
  },
  {
    name: 'Github',
    image: githubsvg,
    value: 'kpirabaharan',
    href: 'https://github.com/kpirabaharan',
    link: true,
  },
  {
    name: 'Resume',
    image: docicon,
    value: 'Resume',
    href: './Keeshigan-Pirabaharan-Resume.pdf',
    link: true,
  },
  {
    name: 'Location',
    image: location,
    value: 'Toronto, ON',
    link: false,
  },
];

export {
  about,
  opportunity,
  typedHero,
  services,
  frontEndDev,
  backEndDev,
  mobileDev,
  embeddedDev,
  mechatronicsDev,
  dataScience,
  otherTech,
  experiences,
  education,
  projects,
  contactInfo,
};
