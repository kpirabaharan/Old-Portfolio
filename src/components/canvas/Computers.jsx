import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import useMediaQuery from '../../hooks/useMediaQuery';
import CanvasLoader from '../Loader';

const Computers = ({ isSmall, isMedium }) => {
  const computerdesk = useGLTF('./computer_desk/scene.gltf');

  return (
    <mesh>
      <spotLight
        position={[-10, 50, 0]}
        angle={0.12}
        penumbra={1}
        intensity={0.5}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight
        position={isSmall ? [2, 0, 0.0] : [0, 0, 0.0]}
        intensity={1.5}
      />
      <hemisphereLight intensity={0.15} groundColor='black' />
      <primitive
        object={computerdesk.scene}
        scale={isSmall ? 4 : isMedium ? 8 : 8}
        position={
          isSmall
            ? [3, -1.5, -0.5]
            : isMedium
            ? [3, -3.5, -1.5]
            : [3, -3.5, -1.5]
        }
        rotation={isSmall ? [0, 1.34, 0] : [0, 1.36, 0.0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const isSmallScreens = useMediaQuery('(max-width: 768px)');
  const isMediumScreens = useMediaQuery('(max-width: 1060px)');

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isSmall={isSmallScreens} isMedium={isMediumScreens} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
