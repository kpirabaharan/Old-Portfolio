import { BrowserRouter } from 'react-router-dom';

import {
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
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-wallpaper h-screen bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
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
      </div>
    </BrowserRouter>
  );
};

export default App;
