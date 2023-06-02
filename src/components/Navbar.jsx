import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { leftArrow } from '../assets';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = ({ isHomePage = true }) => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className='sm:px-8 px-6 fixed w-full flex items-center py-5 top-0 z-20
        bg-primary'
    >
      {!isHomePage ? (
        <Link to={'/'}>
          <div className='w-10 h-10 mx-4 sm:hidden'>
            <img
              className='h-full w-full object-contain'
              src={leftArrow}
              alt='back'
            />
          </div>
        </Link>
      ) : (
        <></>
      )}
      <div
        className={`w-full flex ${
          isHomePage ? 'justify-between' : 'sm:justify-center'
        } items-center max-w-7xl mx-auto`}
      >
        <Link
          to={'/'}
          className='flex items-center gap-2'
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='h-9 object-contain pr-2' />

          <p className='text-white-100 hover:text-white-100 text-lg leading-[20px] font-semibold'>
            Keeshigan <span className='block md:inline'> Pirabaharan</span>
          </p>
        </Link>
        {isHomePage ? (
          <ul className='list-none hidden sm:flex flex-row items-center gap-4 md:gap-8'>
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`
              ${
                active === link.title ? 'text-white' : 'text-secondary'
              } hover:text-white text-lg font-medium `}
                onClick={() => setActive(link.title)}
              >
                <HashLink to={`#${link.id}`}>{link.title}</HashLink>
              </li>
            ))}
            <li
              className={`outline outline-offset-0 outline-2 rounded-lg text-secondary 
            hover:text-white p-2 text-lg font-medium `}
            >
              <a href='./resume.pdf' download target='_blank'>
                Resume
              </a>
            </li>
          </ul>
        ) : (
          <></>
        )}
        {isHomePage ? (
          <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img
              src={toggle ? close : menu}
              alt='menu'
              className='w-[28px] h-[28px] object-contain '
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`${
                toggle ? 'flex' : 'hidden'
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] 
              z-10 rounded-xl`}
            >
              <ul className='list-none flex justify-end items-start flex-col gap-4'>
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`
              ${
                active === link.title ? 'text-white' : 'text-secondary'
              } font-poppins `}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}
                  >
                    <HashLink to={`#${link.id}`}>{link.title}</HashLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
