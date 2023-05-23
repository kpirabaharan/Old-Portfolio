import React from 'react';
import { Outlet } from 'react-router-dom';

import { Navbar } from '../components/';
import { styles } from '../styles';

const RootLayout = () => {
  return (
    <>
      <Navbar isHomePage={false} />
      <main className=''>
        <div
          className={`${styles.padding} max-w-7xl w-5/6 mx-auto relative z-0`}
        >
          <div className='absolute top-[120px]'>
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
};

export default RootLayout;
