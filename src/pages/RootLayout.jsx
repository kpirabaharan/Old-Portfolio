import React, { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { styles } from '../styles';
import { Navbar, StarsCanvas } from '../components/';
import { leftArrow } from '../assets';

const RootLayout = () => {
  const canvas = document.createElement('canvas');
  var gl;
  try {
    gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  } catch (err) {}

  const [rootLayoutHeight, setRootLayoutHeight] = useState(0);
  useEffect(() => {
    setRootLayoutHeight(document.getElementById('rootLayout-div').clientHeight);
    console.log(rootLayoutHeight);
  }, [rootLayoutHeight]);

  return (
    <div className='absolute h-full w-full bg-[#050505]'>
      <Navbar isHomePage={false} />
      <Link to={'/'}>
        <div className='hidden sm:block fixed top-[130px] left-8 w-10 h-10 z-20 cursor-pointer'>
          <img src={leftArrow} alt='' />
        </div>
      </Link>
      <main className={`absolute top-[100px] w-full ${styles.paddingX}`}>
        <div id='rootLayout-div' className='relative z-0'>
          <Outlet />
          {gl ? <StarsCanvas height={rootLayoutHeight} /> : <></>}
        </div>
      </main>
    </div>
  );
};

export default RootLayout;
