import React from 'react';
import { DotLoader } from 'react-spinners';

const Landing = ({ loading }) => {
  return (
    <section className='w-full h-screen mx-auto bg-primary'>
      <div className='flex flex-col justify-center items-center text-center w-full h-full'>
        <h1 className={`text-2xl text-white animate-pulse`}>
          Keeshigan Pirabaharan
          <span className='text-[#4e4d81] block sm:inline'> Portfolio</span>
        </h1>
        <DotLoader className='mt-8' color={'#4e4d81'} loading={loading} />
      </div>
    </section>
  );
};

export default Landing;
