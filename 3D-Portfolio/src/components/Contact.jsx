import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { contactInfo } from '../constants';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn, fadeIn } from '../utils';

const InfoCard = ({ index, name, value, href }) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <div className='flex flex-row md:flex-col items-baseline'>
        <p className='font-bold text-2xl w-[150px]'>{name}</p>
        <a className='pl-8 md:pl-0 md:pt-4 font-normal text-xl' href={href}>
          {value}
        </a>
      </div>
    </motion.div>
  );
};

const Contact = () => {
  return (
    <div className={`flex flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Don't Be A Stranger</p>
        <h3 className={styles.sectionHeadText}>Contact Me At ...</h3>
        <div className='mt-16 flex flex-col md:flex-row justify-around gap-7'>
          {contactInfo.map((info, ind) => (
            <InfoCard key={`project-${ind}`} index={ind} {...info} />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
