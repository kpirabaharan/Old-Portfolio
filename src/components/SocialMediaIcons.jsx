import React from 'react';

const SocialMediaIcons = () => {
  return (
    <div className='flex justify-center md:justify-start my-10 gap-7'>
      <a
        className='hover:opacity-50 transition duration-500'
        href='https://linkedin.com/in/kpirabaharan'
        target={'_blank'}
        rel='noreferrer'
      >
        <img src='../assets/linkedin.png' alt='linkedin-link' />
      </a>
      <a
        className='hover:opacity-50 transition duration-500'
        href='https://github.com/kpirabaharan'
        target={'_blank'}
        rel='noreferrer'
      >
        <div className=''>
          <img
            className='max-w-[30px] max-h-[30px]'
            src='../assets/github.png'
            alt='github-link'
          />
        </div>
      </a>
    </div>
  );
};

export default SocialMediaIcons;
