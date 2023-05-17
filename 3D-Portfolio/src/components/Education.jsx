import { motion } from 'framer-motion';

import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { education } from '../constants';
import { textVariant } from '../utils';

const EducationCard = ({ education }) => {
  return (
    <div className='mt-4 flex flex-row bg-black-100 p-8 rounded-2xl justify-center items-center'>
      <div className='w-[100px] h-[100px]'>
        <img
          className='w-full h-full object-contain'
          src={education.icon}
          alt='Western'
        />
      </div>
      <div className='ml-8 w-full flex flex-col'>
        <div className='flex flex-row '>
          <p className='md:text-2xl sm:text-lg text-[14px] font-semibold'>
            {education.university} - <span> {education.location}</span>
          </p>
        </div>
        <p className='md:text-2xl sm:text-lg text-[14px] font-semibold'>
          {education.degree} with distinction
        </p>
        <p className='md:text-2xl sm:text-lg text-[14px] font-semibold'>
          {education.date}
        </p>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Education</h2>
      </motion.div>
      <EducationCard education={education} />
    </>
  );
};

export default SectionWrapper(Education, 'education');
