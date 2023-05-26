import React from 'react';

import { styles } from '../../styles';

const ProjectHeader = ({ name, status, description }) => {
  return (
    <>
      <p className={styles.heroHeadText}>{name}</p>
      <p className={`${styles.projectSubText} italic`}>Status - {status}</p>
      <p className='mt-2 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        {description}
      </p>
      {/* <p className={`${styles.sectionHeadText} ${styles.paddingY}`}>
        Front-End
      </p> */}
    </>
  );
};

export default ProjectHeader;
