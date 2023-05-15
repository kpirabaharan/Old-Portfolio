import { useState } from 'react';
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

  return (
    <BrowserRouter>
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
