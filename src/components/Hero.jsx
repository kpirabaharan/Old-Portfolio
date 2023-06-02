import { motion } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';

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
      <div className='absolute h-full w-full'>
        <img
          id='background-wallpaper'
          className='object-cover h-full w-full'
          src={'/bg-wallpaper.jpg'}
          alt='bg-wallpaper'
        />
      </div>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl 
          mx-auto flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'></div>
        <div className='flex flex-col justify-start w-full h-full'>
          <p className={`${styles.heroPreText}text-white`}>Hi, my name is</p>
          <p className={`${styles.heroHeadText} text-teal`}>
            Keeshigan Pirabaharan
          </p>
          <p className={`${styles.heroSubText} mt-2 text-white`}>
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
          items-center z-10'
      >
        <HashLink to={'#about'}>
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
        </HashLink>
      </div>
    </section>
  );
};

export default Hero;
