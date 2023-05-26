import {
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  phone,
  server,
  embedded,
  nodejs,
  mongodb,
  git,
  python,
  raspberryPi,
  dart,
  flutter,
  kotlin,
  arduino,
  tensorflow,
  c,
  mySQL,
  linux,
  opg,
  cw,
  western,
  ecommerce,
  velocityvoyage,
  sociopedia,
  robot,
  location,
  mail,
  linkedin,
  githubsvg,
  docicon,
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

const about = `I'm a Mechatronics/Software engineer with experience in Javascript,
 Dart, C and Python, and expertise in Frameworks like React, Node and Express. 
 I'm a quick learner with the willingness to learn new technologies to create 
 efficient and scalable solutions that solve real-world problems.`;

// const typedLanding = [
//   'I am a Full Stack Developer',
//   500,
//   'I am a Mobile App Developer',
//   500,
//   'I am an Embedded Systems Engineer',
//   500,
//   'I am a Mechatronics/Software Engineer',
//   500,
// ];

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
    title: 'Web Developer',
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
    name: 'ReactJS',
    icon: reactjs,
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
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'NodeJS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'MySQL',
    icon: mySQL,
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
    name: 'Linux',
    icon: linux,
  },
  {
    name: 'Arduino',
    icon: arduino,
  },
  {
    name: 'Raspberry Pi',
    icon: raspberryPi,
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
    name: 'Git',
    icon: git,
  },
];

const experiences = [
  {
    title: 'Embedded Software Developer',
    company_name: 'Curtiss-Wright',
    location: 'Ottawa, ON',
    icon: cw,
    iconBg: '#e51938',
    date: 'June 2022 - Present',
    points: [
      'Developed automated test software using C and Bash Scripts to perform qualification testing on a vehicle management computer / network switch hybrid device',
      'Collaborated with hardware engineers to optimize system performance and reliability',
      'Created and maintained software documentation, including design specifications, code documentation, and user manuals',
      'Participated in code reviews and worked with other developers to ensure software quality and adherence to coding standards',
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
      'Managed small scale projects (< $200k) requiring engineering changes to the plant',
      'Assisted senior project managers with capital project (>$200k), including coordination with internal stakeholder and EPC contractors to ensure project success',
      'Exposure to industrial operations, complex system processes, and practical failure modes',
      'Exposure to technical work done in both mechanical and electrical modifications',
      'Worked with a multidisciplinary team of engineers and technicians to support modifications',
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
    name: '4 DOF Robot',
    description:
      'Built and programmed a 4-DoF robotic arm as a mechatronic project,\
       capable of precise and coordinated movements for various applications.',
    tags: [
      {
        name: 'arduino',
        color: 'blue-text-gradient',
      },
      {
        name: 'raspberry pi',
        color: 'green-text-gradient',
      },
      {
        name: 'mechatronics',
        color: 'pink-text-gradient',
      },
      {
        name: '3d printed',
        color: 'orange-text-gradient',
      },
    ],
    image: robot,
    source_code_link: 'https://github.com/kpirabaharan/Four-DOF-Robot',
    webpage_link: '/projects/robot',
  },
  {
    name: 'Velocity Voyage',
    description:
      'The endless runner video game, created with Unity, offers players an exciting \
      and challenging experience as they run and dodge obstacles for as long as possible.',
    tags: [
      {
        name: 'unity',
        color: 'blue-text-gradient',
      },
      {
        name: 'csharp',
        color: 'green-text-gradient',
      },
    ],
    image: velocityvoyage,
    source_code_link: 'https://github.com/kpirabaharan/Velocity-Voyage',
    webpage_link: '/projects/velocityvoyage',
  },
  {
    name: 'Tech Trendz',
    description:
      'This Web/Mobile application utilizes Stripe API to provide a secure online \
      shopping experience for users to purchase technology products with confidence.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'orange-text-gradient',
      },
      {
        name: 'flutter',
        color: 'blue-text-gradient',
      },
    ],
    image: ecommerce,
    source_code_link: 'https://github.com/kpirabaharan/E-Commerce',
    webpage_link: '/projects/techtrendz',
  },
  {
    name: 'Sociopedia',
    description:
      'The full-stack social media app provides users with a comprehensive platform \
      to connect, communicate, and share content with others in a seamless and engaging manner.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'material-ui',
        color: 'pink-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'orange-text-gradient',
      },
      {
        name: 'flutter',
        color: 'blue-text-gradient',
      },
    ],
    image: sociopedia,
    source_code_link: 'https://github.com/kpirabaharan/Social-Media-App',
    webpage_link: '/projects/sociopedia',
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
    href: './resume.pdf',
    link: true,
  },
  {
    name: 'Location',
    image: location,
    value: 'Toronto, ON',
    link: false,
  },
];

const robotProject = {
  name: '4 DoF Robot',
  status: 'Ongoing',
  category: 'Mechatronics System',
  description:
    'This E-commerce project consists of a website built with React, coupled with \
    a Flutter mobile application, offers a seamless and comprehensive platform for \
    online shopping. With its user-friendly interface and robust functionality, \
    customers can browse and purchase products effortlessly, while enjoying a consistent \
    experience across both web and mobile platforms. The MERN stack ensures \
    efficient and scalable performance, while the Flutter app provides a responsive \
    and intuitive mobile experience, enhancing accessibility for customers on the go.',
};

const velocityVoyageProject = {
  name: 'Velocity Voyage',
  status: 'Completed',
  category: 'Unity Game',
  description:
    'This E-commerce project consists of a website built with React, coupled with \
    a Flutter mobile application, offers a seamless and comprehensive platform for \
    online shopping. With its user-friendly interface and robust functionality, \
    customers can browse and purchase products effortlessly, while enjoying a consistent \
    experience across both web and mobile platforms. The MERN stack ensures \
    efficient and scalable performance, while the Flutter app provides a responsive \
    and intuitive mobile experience, enhancing accessibility for customers on the go.',
};

const techTrendzProject = {
  name: 'Tech Trendz',
  status: 'Completed',
  category: 'MERN Full Stack + Mobile App',
  description:
    'This E-commerce project consists of a website built with React, coupled with \
    a Flutter mobile application, offers a seamless and comprehensive platform for \
    online shopping. With its user-friendly interface and robust functionality, \
    customers can browse and purchase products effortlessly, while enjoying a consistent \
    experience across both web and mobile platforms. The MERN stack ensures \
    efficient and scalable performance, while the Flutter app provides a responsive \
    and intuitive mobile experience, enhancing accessibility for customers on the go.',
};

const sociopediaProject = {
  name: 'Sociopedia',
  status: 'Completed',
  category: 'MERN Full Stack + Mobile App',
  description:
    'This E-commerce project consists of a website built with React, coupled with \
    a Flutter mobile application, offers a seamless and comprehensive platform for \
    online shopping. With its user-friendly interface and robust functionality, \
    customers can browse and purchase products effortlessly, while enjoying a consistent \
    experience across both web and mobile platforms. The MERN stack ensures \
    efficient and scalable performance, while the Flutter app provides a responsive \
    and intuitive mobile experience, enhancing accessibility for customers on the go.',
};

export {
  about,
  // typedLanding,
  typedHero,
  services,
  frontEndDev,
  backEndDev,
  mobileDev,
  embeddedDev,
  dataScience,
  otherTech,
  experiences,
  education,
  projects,
  contactInfo,
  robotProject,
  velocityVoyageProject,
  techTrendzProject,
  sociopediaProject,
};
