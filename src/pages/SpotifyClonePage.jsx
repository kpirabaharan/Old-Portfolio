import React from 'react';

import { ProjectHeader } from '../components';
import { spotifyProject } from '../constants';

const SpotifyClonePage = () => {
  return (
    <div className='w-5/6 mx-auto'>
      <ProjectHeader {...spotifyProject} />
    </div>
  );
};

export default SpotifyClonePage;
