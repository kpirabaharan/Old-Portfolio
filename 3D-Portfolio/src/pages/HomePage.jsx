import { useState, useEffect } from 'react';

import {
  Landing,
  Navbar,
  Hero,
  About,
  Experience,
  Education,
  Tech,
  Projects,
  Contact,
  StarsCanvas,
} from '../components/';

const HomePage = () => {
  const [isDoneLoading, setIsDoneLoading] = useState(false);

  useEffect(() => {
    setIsDoneLoading(
      JSON.parse(window.localStorage.getItem('isDoneLoading') === 'true'),
    );
  }, []);

  const canvas = document.createElement('canvas');
  var gl;
  try {
    gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  } catch (err) {}

  return (
    <div className='relative z-0 bg-primary'>
      {isDoneLoading ? (
        <>
          <div className='bg-wallpaper h-screen bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero setIsCompleted={setIsDoneLoading} />
          </div>
          <div className='bg-[#050505]'>
            <About />
            <Experience />
            <Education />
            <Tech />
            <Projects />
          </div>
          <div className='relative z-0'>
            <Contact />
            {gl ? <StarsCanvas /> : <></>}
          </div>
        </>
      ) : (
        <Landing setIsCompleted={setIsDoneLoading} />
      )}
    </div>
  );
};

export default HomePage;
