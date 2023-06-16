import { motion } from 'framer-motion';

import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils';

import {
  frontEndDev,
  backEndDev,
  mobileDev,
  embeddedDev,
  dataScience,
  mechatronicsDev,
  otherTech,
} from '../constants';

const TechField = ({ index, field, technology }) => {
  return (
    <div className='w-full h-full pt-8 pb-2'>
      <motion.div
        variants={fadeIn('right', 'spring', 0.25 + index * 0.25, 0.5)}
        className='flex flex-row justify-center sm:justify-start'
      >
        <p className={styles.sectionSubText}>{field}</p>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center sm:justify-start pt-6 pb-4 sm:pb-0 gap-y-10 sm:gap-10 h-full w-full'>
        {technology.map((tech) => {
          return (
            <motion.div
              variants={fadeIn('right', 'spring', 0.25 + index * 0.25, 0.5)}
              className='w-[100px] h-[50px] sm:w-[75px] sm:h-[75px] flex flex-col justify-center 
                items-center'
              key={`${field}${tech.name}`}
            >
              <div className='w-[90%] h-[90%] flex justify-center'>
                <img
                  className='w-full h-full object-contain'
                  src={tech.icon}
                  alt={tech.name}
                />
              </div>
              <p className='pt-2 text-center'>{tech.name}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
      </motion.div>
      <TechField
        index={0}
        field={'Frontend Development'}
        technology={frontEndDev}
      />
      <TechField
        index={1}
        field={'Backend Development'}
        technology={backEndDev}
      />
      <TechField
        index={2}
        field={'Mobile Development'}
        technology={mobileDev}
      />
      <TechField
        index={3}
        field={'Embedded Software Development'}
        technology={embeddedDev}
      />
      <TechField
        index={4}
        field={'Mechatronics Engineering'}
        technology={mechatronicsDev}
      />
      <TechField index={5} field={'Data Science'} technology={dataScience} />
      <TechField index={6} field={'Other'} technology={otherTech} />
    </>
  );
};

export default SectionWrapper(Tech, '');