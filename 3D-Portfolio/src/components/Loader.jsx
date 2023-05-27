import { Html } from '@react-three/drei';
import { HashLoader } from 'react-spinners';

const Loader = () => {
  return (
    <Html>
      <div className='relative right-11 bottom-6 flex flex-row'>
        <HashLoader color={'#448b9c'} />
      </div>
    </Html>
  );
};

export default Loader;
