import React from 'react';
import { Outlet, Link } from 'react-router-dom';

import { leftArrow } from '../assets';
import { Navbar } from '../components/';
import { styles } from '../styles';

const RootLayout = () => {
  return (
    <div className='absolute h-full w-full bg-[#050505]'>
      <Navbar isHomePage={false} />
      <Link to={'/'}>
        <div className='hidden sm:block fixed top-[130px] left-8 w-10 h-10 z-20 cursor-pointer'>
          <img src={leftArrow} alt='' />
        </div>
      </Link>
      <main className={`absolute top-[100px] w-full ${styles.paddingX}`}>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
