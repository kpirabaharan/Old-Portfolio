import { useState, useEffect } from 'react';
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

  const [homePageHeight, setHomePageHeight] = useState(0);
  useEffect(() => {
    setHomePageHeight(document.getElementById('homepage-div').clientHeight);
    console.log(homePageHeight);
  }, [homePageHeight]);

  return (
    <div className='relative z-0 bg-primary'>
      <div className='h-screen'>
        <Navbar />
        <Hero />
      </div>
      <div id='homepage-div' className='relative z-0'>
        <About />
        <Experience />
        <Education />
        <Tech />
        <Projects />
        <Contact />
        {gl ? <StarsCanvas height={homePageHeight} /> : <></>}
      </div>
    </div>
  );
};

export default HomePage;
