import { Html, useProgress } from '@react-three/drei';

import { LoadingSpinner } from './LoadingSpinner';

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className='canvas-load'></span>
      <div className='flex flex-row gap-4'>
        <p className='text-white text-center'>
          Loading... <span>{progress.toFixed(0)}%</span>
        </p>
        <LoadingSpinner />
      </div>
    </Html>
  );
};

export default Loader;
