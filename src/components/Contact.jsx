import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { contactInfo } from '../constants';

import { SectionWrapper } from '../hoc';
import { slideIn, fadeIn } from '../utils';

const InfoCard = ({ index, name, image, value, href, link }) => {
  const isDownload = name === 'Resume' ? true : false;
  const isLink = link ? 'underline underline-offset-4' : '';

  return (
    <motion.div variants={fadeIn('up', 'spring', 0.5 + index * 0.25, 0.5, 0.5)}>
      <div className='flex flex-row items-center pt-2'>
        <img className='w-[20px] h-[20px]' src={image} alt='sd' />
        <a
          className={`ml-2 text-l md:text-xl ${isLink}`}
          href={href}
          download={isDownload}
          target='_blank'
        >
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
        variants={slideIn('up', 'tween', 0.2, 0.5)}
        className='bg-dark-teal p-8 rounded-2xl'
      >
        <h3 className={styles.sectionHeadText}>
          Contact Me At <span className='hidden sm:inline'>...</span>
        </h3>
        <div className='mt-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7'>
          {contactInfo.map((info, ind) => (
            <InfoCard key={`project-${ind}`} index={ind} {...info} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
