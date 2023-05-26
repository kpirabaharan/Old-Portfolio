import { motion } from 'framer-motion';

import { styles } from '../styles';
import { typedHero } from '../constants';
import { ComputersCanvas } from './canvas/';
import TypedContent from './TypeAnimation';

const Hero = () => {
  const canvas = document.createElement('canvas');
  var gl;
  try {
    gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  } catch (err) {}

  return (
    <section className='relative w-full h-screen mx-auto'>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl 
          mx-auto flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#3d38c9]' />
          <div className='w-1 sm:h-80 h-40 blue-gradient' />
        </div>
        <div className='flex flex-col justify-start w-full h-full'>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#3d38c9]'>Keeshigan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <TypedContent text={typedHero} />
          </p>
          <div className='flex-grow'></div>
          <div className='h-[60%] mb-10'>
            {gl ? (
              <ComputersCanvas />
            ) : (
              <div className='h-full flex flex-row justify-center items-center'>
                <p className=''>
                  Enable hardware acceleration or WebGL to interact with 3D
                  Model{' '}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        className='absolute bottom-8 sm:-bottom-6 w-full flex justify-center 
          items-center cursor-pointer z-10'
      >
        <a href='#about'>
          <div
            className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary
              flex justify-center items-start p-2'
          >
            <motion.div
              animate={{ y: [0, 26, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='w-3 h-3 rounded-full bg-secondary'
            ></motion.div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
