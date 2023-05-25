import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { textVariant } from '../utils';

const RobotPage = () => {
  return (
    <div className='w-5/6 mx-auto'>
      <p className={styles.sectionHeadText}>4 DoF Robot Project</p>
      <p className={`${styles.sectionSubText} italic`}>Status - Ongoing</p>

      <div className='w-[250px] h-[141px] sm:w-[500px] sm:h-[281px] mt-4'>
        <iframe
          width='100%'
          height='100%'
          src='https://www.youtube.com/embed/Dh5WF8qlQZ0'
          title='YouTube video player'
          frameBorder='0'
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default RobotPage;
