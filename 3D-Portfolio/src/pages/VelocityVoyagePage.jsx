import React from 'react';

import { ProjectHeader } from '../components';
import { velocityVoyageProject } from '../constants';

const VelocityVoyagePage = () => {
  return (
    <div className='w-5/6 mx-auto'>
      <ProjectHeader {...velocityVoyageProject} />
    </div>
  );
};

export default VelocityVoyagePage;
