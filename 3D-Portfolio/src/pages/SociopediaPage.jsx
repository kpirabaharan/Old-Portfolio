import React from 'react';

import { ProjectHeader } from '../components';
import { sociopediaProject } from '../constants';

const SociopediaPage = () => {
  return (
    <div className='w-5/6 mx-auto'>
      <ProjectHeader {...sociopediaProject} />
    </div>
  );
};

export default SociopediaPage;
