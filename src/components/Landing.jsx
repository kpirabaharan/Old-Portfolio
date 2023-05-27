import React from 'react';
import { DotLoader } from 'react-spinners';

const Landing = ({ loading }) => {
  return (
    <section className='w-full h-screen mx-auto bg-primary'>
      <div className='flex flex-col justify-center items-center text-center w-full h-full'>
        <h1 className={`text-2xl text-white animate-pulse`}>
          Keeshigan Pirabaharan
          <span className='text-teal block sm:inline'> Portfolio</span>
        </h1>
        <DotLoader className='mt-8' color={'#448b9c'} loading={loading} />
      </div>
    </section>
  );
};

export default Landing;
