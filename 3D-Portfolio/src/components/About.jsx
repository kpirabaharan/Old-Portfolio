import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { about, services } from '../constants';
import { fadeIn, textVariant } from '../utils';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full' tiltReverse={true}>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex 
            flex-col justify-evenly items-center '
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3
            className='
            text-white text-lg font-semibold text-center'
          >
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        {about}
      </motion.p>
      <div className='mt-20 flex flex-wrap h-full gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} {...index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
