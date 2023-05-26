import React from 'react';

import { ProjectHeader } from '../components';
import { styles } from '../styles';
import { robotProject } from '../constants';

const RobotPage = () => {
  return (
    <div className='w-5/6 mx-auto'>
      <ProjectHeader {...robotProject} />
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
