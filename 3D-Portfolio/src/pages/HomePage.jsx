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
} from '../components/';

const HomePage = () => {
  const canvas = document.createElement('canvas');
  var gl;
  try {
    gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  } catch (err) {}

  return (
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
        {gl ? <StarsCanvas /> : <></>}
      </div>
    </div>
  );
};

export default HomePage;
