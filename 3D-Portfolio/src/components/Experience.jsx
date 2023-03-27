import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { experiences } from '../constants';
import { textVariant } from '../utils';

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img
          src={experience.icon}
          alt={experience.company_name}
          className='w-[80%] h-[80%] object-contain'
        />
      </div>
    }
  >
    <h3 className='text-lg text-white font-semibold'>{experience.title}</h3>
    <h4 className='text-white'>
      {experience.company_name}
      <span className='pl-4'>|</span>
      <span className='pl-4'>{experience.location}</span>
    </h4>

    <p className='text-secondary'>{experience.date}</p>
    <ul className='mt-5 list-disc ml-5 space-y-2'>
      {experience.points.map((point, index) => (
        <li
          key={`experience-${index}`}
          className='text-white-100 text-[14px] pl-1 tracking-widers'
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div cariant={textVariant()}>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
