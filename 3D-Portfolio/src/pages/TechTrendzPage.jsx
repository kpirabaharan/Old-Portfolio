import React from 'react';

import { ProjectHeader } from '../components';
import { techTrendzProject } from '../constants';

const TechTrendzPage = () => {
  return (
    <div className='w-5/6 mx-auto'>
      <ProjectHeader {...techTrendzProject} />
    </div>
  );
};

export default TechTrendzPage;
