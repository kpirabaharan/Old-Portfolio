import { motion } from 'framer-motion';

import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { github, web } from '../assets';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils';

const ProjectCard = ({
  index,
  name,
  description,
  image,
  source_code_link,
  website_link,
}) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.2, 1)}
      className='relative flex bg-dark-teal rounded-2xl w-full sm:w-[360px] h-[350px]'
    >
      <div className='absolute inset-0 flex justify-between m-6 z-10'>
        <div>
          {website_link ? (
            <a>
              <div
                onClick={() => {
                  window.open(website_link, '_blank');
                }}
                className='black-gradient w-10 h-10 rounded-full flex justify-center 
                    items-center cursor-pointer'
              >
                <img
                  src={web}
                  alt='website'
                  className='w-1/2 h-1/2 object-contain z-20'
                />
              </div>
            </a>
          ) : (
            <div></div>
          )}
        </div>
        <div>
          {source_code_link ? (
            <a>
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
                  className='w-1/2 h-1/2 object-contain z-20'
                />
              </div>
            </a>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <div
        className='absolute h-full w-full rounded-2xl opacity-0 hover:opacity-90 
          transition duration-500 flex flex-col justify-center items-center 
          text-center bg-slate-700 z-10'
      >
        <p className='text-2xl text-white'>{name}</p>
        <p className='mt-7 px-8'>{description}</p>
        <div className='absolute inset-0 flex justify-between m-6 z-10'>
          <div>
            {website_link ? (
              <a>
                <div
                  onClick={() => {
                    window.open(website_link, '_blank');
                  }}
                  className='black-gradient w-10 h-10 rounded-full flex justify-center 
                    items-center cursor-pointer'
                >
                  <img
                    src={web}
                    alt='website'
                    className='w-1/2 h-1/2 object-contain z-20'
                  />
                </div>
              </a>
            ) : (
              <div></div>
            )}
          </div>
          <div>
            {source_code_link ? (
              <a>
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
                    className='w-1/2 h-1/2 object-contain z-20'
                  />
                </div>
              </a>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
      <div className='absolute h-full w-full p-4'>
        <img
          className='object-cover h-full w-full rounded-2xl'
          src={image}
          alt={name}
        />
      </div>
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
      <div
        className='mt-20 justify-center sm:justify-start flex flex-wrap gap-7 
        w-full'
      >
        {projects.map((proj, ind) => (
          <ProjectCard key={`project-${ind}`} index={ind} {...proj} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, 'projects');
