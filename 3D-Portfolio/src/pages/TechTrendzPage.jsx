import React from 'react';

import { techtrendz } from '../constants';
import { styles } from '../styles';

const TechTrendzPage = () => {
  return (
    <div className='w-5/6 mx-auto'>
      <p className={styles.heroHeadText}>Tech Trendz</p>
      <p className={`${styles.heroSubText} italic`}>Status - Completed</p>
      <p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        {techtrendz.description}
      </p>
      <p className={`${styles.sectionHeadText} ${styles.paddingY}`}>FrontEnd</p>
      
    </div>
  );
};

export default TechTrendzPage;
