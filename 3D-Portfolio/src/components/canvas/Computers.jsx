import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import useMediaQuery from '../../hooks/useMediaQuery';
import CanvasLoader from '../Loader';

const Computers = ({ isSmall, isMedium }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');

  return (
    <mesh>
      <spotLight
        position={[-10, 50, 0]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={0.5} />
      <hemisphereLight intensity={0.15} groundColor='black' />
      <primitive
        object={computer.scene}
        scale={isSmall ? 0.55 : isMedium ? 0.65 : 0.75}
        position={
          isSmall
            ? [0, -1.8, -0.95]
            : isMedium
            ? [0, -2.3, -1]
            : [0, -2.5, -1.25]
        }
        rotation={[-0.0, -0.25, -0.05]}
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
