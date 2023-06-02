import React from 'react';

import { ProjectHeader } from '../components';
import { partCollectingRobotProject } from '../constants';

const PartCollectingRobotPage = () => {
  return (
    <div className='w-5/6 mx-auto'>
      <ProjectHeader {...partCollectingRobotProject} />
    </div>
  );
};

export default PartCollectingRobotPage;
