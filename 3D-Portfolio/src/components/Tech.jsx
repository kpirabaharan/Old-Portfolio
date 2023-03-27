import { motion } from 'framer-motion';

import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { textVariant } from '../utils';
import { BallCanvas } from './canvas/';
import {
  frontEndDev,
  backEndDev,
  mobileDev,
  embeddedDev,
  dataScience,
  otherTech,
} from '../constants';

const TechField = ({ field, technology }) => {
  return (
    <div className='w-full h-full py-6'>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{field}</p>
      </motion.div>
      <div className='flex flex-row flex-wrap gap-10 h-full w-full'>
        {technology.map((tech) => {
          return (
            <div className='w-28 h-28' key={`${field}${tech.name}`}>
              <BallCanvas icon={tech.icon} />
              <div className='flex justify-center w-full'>
                <p className=''>{tech.name}</p>
              </div>
            </div>
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
      <TechField field={'Frontend Development'} technology={frontEndDev} />
      <TechField field={'Backend Development'} technology={backEndDev} />
      <TechField field={'Mobile Development'} technology={mobileDev} />
      <TechField
        field={'Embedded Software Development'}
        technology={embeddedDev}
      />
      <TechField field={'Data Science'} technology={dataScience} />
      <TechField field={'Other'} technology={otherTech} />
    </>
  );
};

export default SectionWrapper(Tech, '');
