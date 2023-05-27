import React from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { github, rightArrow } from '../assets';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils';

const ProjectCard = ({
  index,
  name,
  description,
  image,
  source_code_link,
  webpage_link,
}) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        tiltReverse={true}
        className='bg-dark-teal rounded-2xl sm:w-[360px] w-full h-[350px]'
      >
        <div className='absolute inset-0 flex justify-end m-6'>
          <div className='flex flex-col justify-between'>
            <div
              onClick={() => {
                window.open(source_code_link, '_blank');
              }}
              className='black-gradient w-10 h-10 rounded-full flex justify-center 
                items-center cursor-pointer'
            >
              <img
                src={github}
                alt='github'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
            <Link to={webpage_link}>
              <div
                className='black-gradient w-10 h-10 rounded-full flex justify-center 
                items-center cursor-pointer'
              >
                <img
                  src={rightArrow}
                  alt='github'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </Link>
          </div>
        </div>
        <div
          className='absolute h-full w-full rounded-2xl opacity-0 hover:opacity-90
          transition duration-500 flex flex-col justify-center items-center text-center
          bg-slate-700'
        >
          <p className='text-2xl text-white'>{name}</p>
          <p className='mt-7 px-8'>{description}</p>
          <div className='absolute inset-0 flex justify-end m-6'>
            <div className='flex flex-col justify-between'>
              <div
                onClick={() => {
                  window.open(source_code_link, '_blank');
                }}
                className='black-gradient w-10 h-10 rounded-full flex justify-center 
                items-center cursor-pointer'
              >
                <img
                  src={github}
                  alt='github'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
              <Link to={webpage_link}>
                <div
                  className='black-gradient w-10 h-10 rounded-full flex justify-center 
                items-center cursor-pointer'
                >
                  <img
                    src={rightArrow}
                    alt='github'
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </Link>
            </div>
          </div>
          {/* <div className='absolute inset-0 flex justify-end items-end m-6'></div> */}
        </div>
        <img
          className='h-full w-screen object-cover rounded-[2rem] p-5'
          src={image}
          alt={name}
        />
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          className='mt-3 text-secondary-2 text-[17px] max-w-3xl leading-[30px]'
          variants={fadeIn('', '', 0.2, 1)}
        >
          The following projects showcases my skills and expertise in various
          areas of software development, including web applications, mobile
          apps, and game development. Each project reflects my commitment to
          using the latest technologies and best practices to create reliable,
          scalable, and user-friendly software solutions.
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((proj, ind) => (
          <ProjectCard key={`project-${ind}`} index={ind} {...proj} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, 'projects');
