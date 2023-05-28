import { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import { inSphere } from 'maath/random/dist/maath-random.esm';
import useMediaQuery from '../../hooks/useMediaQuery';

const Stars = ({ divHeight }) => {
  const isSmallScreens = useMediaQuery('(max-width: 768px)');
  const ref = useRef();
  const [sphere] = useState(() =>
    inSphere(new Float32Array(divHeight * 5), { radius: 1.5 }),
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 10;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={isSmallScreens ? 0.0005 : 2 / divHeight}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = ({ height }) => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars divHeight={height} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
