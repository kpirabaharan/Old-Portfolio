import React from 'react';

import { styles } from '../../styles';
import { github } from '../../assets';

const ProjectHeader = ({
  name,
  status,
  date,
  category,
  src_link,
  description,
}) => {
  return (
    <>
      <p className={`${styles.projectHeadText} ml-[-10px]`}>{name}</p>
      <div className='flex flex-row'>
        <div>
          <p className={`${styles.projectSubText}`}>
            {status}: {date}
          </p>
          <p className={`${styles.projectSubText}`}>Category: {category}</p>
        </div>
        <div className='flex flex-col justify-center pl-8'>
          <div
            onClick={() => {
              window.open(src_link, '_blank');
            }}
            className='bg-gray-800 w-10 h-10 rounded-full flex justify-center 
                items-center'
          >
            <img
              src={github}
              alt='github'
              className='w-1/2 h-1/2 object-contain z-20'
            />
          </div>
        </div>
      </div>
      <div className='w-[100%] mt-4 border-b-2 border-secondary'></div>
      <p className={`${styles.projectDescriptionText} mt-2`}>{description}</p>
    </>
  );
};

export default ProjectHeader;
