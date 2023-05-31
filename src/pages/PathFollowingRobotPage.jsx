import React from 'react';

import { ProjectHeader } from '../components';
import { pathFollowingRobotProject } from '../constants';

const PathFollowingRobotPage = () => {
  return (
    <div className='w-5/6 mx-auto'>
      <ProjectHeader {...pathFollowingRobotProject} />
      <div className='w-[250px] h-[141px] sm:w-[500px] sm:h-[281px] mt-4'>
        <iframe
          width='100%'
          height='100%'
          src='https://www.youtube.com/embed/yqmgh9YzaJs'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default PathFollowingRobotPage;
