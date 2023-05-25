import React from 'react';

import { techtrendz } from '../constants';
import { styles } from '../styles';

const TechTrendzPage = () => {
  return (
    <div className='w-5/6 mx-auto'>
      <p className={styles.sectionHeadText}>Tech Trendz</p>
      <p className={`${styles.sectionSubText} italic`}>Status - Completed</p>
      <p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        {techtrendz.description}
      </p>
    </div>
  );
};

export default TechTrendzPage;
