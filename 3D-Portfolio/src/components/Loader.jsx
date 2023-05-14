import { Html, useProgress } from '@react-three/drei';

import { LoadingSpinner } from './LoadingSpinner';

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <div className='relative right-6 flex flex-row'>
        <p className=' text-white text-center'>{progress.toFixed(0)}%</p>
        <LoadingSpinner />
      </div>
    </Html>
  );
};

export default Loader;
