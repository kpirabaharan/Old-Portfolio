import { useState, useEffect, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

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
} from './components/';

const App = () => {
  const [isDoneLoading, setIsDoneLoading] = useState(false);

  useEffect(() => {
    setIsDoneLoading(
      JSON.parse(window.sessionStorage.getItem('isDoneLoading') === 'true'),
    );
  }, []);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        {isDoneLoading ? (
          <>
            <div className='h-screen w-full'>
              <div className='absolute h-screen w-full'>
                <Suspense fallback={<div className='bg-primary' />}>
                  <img
                    className='h-full w-full object-cover'
                    src='/bg-wallpaper.jpg'
                    alt='BG Wallpaper'
                  />
                </Suspense>
              </div>
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
              <StarsCanvas />
            </div>
          </>
        ) : (
          <Landing setIsCompleted={setIsDoneLoading} />
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;
