import {
  mobile,
  backend,
  creator,
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
  ecommerce,
  velocityvoyage,
  tripguide,
  threejs,
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
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  // {
  //   name: 'Three JS',
  //   icon: threejs,
  // },
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
    name: 'Node JS',
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
    name: 'git',
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

// const testimonials = [
//   {
//     testimonial:
//       'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
//     name: 'Sara Lee',
//     designation: 'CFO',
//     company: 'Acme Co',
//     image: 'https://randomuser.me/api/portraits/women/4.jpg',
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: 'Chris Brown',
//     designation: 'COO',
//     company: 'DEF Corp',
//     image: 'https://randomuser.me/api/portraits/men/5.jpg',
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: 'Lisa Wang',
//     designation: 'CTO',
//     company: '456 Enterprises',
//     image: 'https://randomuser.me/api/portraits/women/6.jpg',
//   },
// ];

const projects = [
  {
    name: 'E-Commerce Web and Mobile App',
    description:
      'Web/Mobile application will utilize Stripe API to provide a secure online \
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
  },
];

export {
  about,
  services,
  frontEndDev,
  backEndDev,
  mobileDev,
  embeddedDev,
  dataScience,
  otherTech,
  experiences,
  projects,
};
