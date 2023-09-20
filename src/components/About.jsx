import { motion } from 'framer-motion';

import { SectionWrapper } from '../hoc';
import { about } from '../constants';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils';

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary-2 text-[17px] max-w-3xl leading-[30px]'
      >
        {about}
      </motion.p>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-8 text-secondary-2 text-[17px] max-w-4xl leading-[30px]'
      >
        I am actively seeking opportunities in software development.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, 'about');
