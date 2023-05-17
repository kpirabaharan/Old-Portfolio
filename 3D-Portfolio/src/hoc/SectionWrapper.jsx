import { motion } from 'framer-motion';

import { styles } from '../styles';
import { staggerContainer } from '../utils';

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl w-5/6 mx-auto relative z-0`}
      >
        <div id={idName} className='absolute -top-[80px] sm:-top-[84px]' />
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
