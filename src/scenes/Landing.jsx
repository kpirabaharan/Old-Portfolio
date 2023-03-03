import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import useMediaQuery from '../hooks/useMediaQuery';

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

  return (
    <section
      id='home'
      className='md:flex md:justify-between md: items-center md:h-full gap-16 py-10'
    >
      {/* IMAGE SECTION */}
      <div className='md:order-2 flex justify-center basis-1/2 z-10 mt-16 md:mt-32'>
        {isAboveMediumScreens ? (
          <div
            className='relative z-0 ml-20 before:absolute before:-top-[60px] 
              before:-left-[60px]  before:w-full 
              before:max-w-[800px] before:h-full  before:border-2
             before:border-blue before:z-[-1]'
          >
            <img
              src='assets/Keeshigan-Temp.jpg'
              alt='profile'
              className='hover:filter hover:saturate-150 transition duration-500 
                z-10 w-full max-w-[400px] md:max-w-[600px]'
            />
          </div>
        ) : (
          <img
            src='assets/Keeshigan-Temp.jpg'
            alt='profile'
            className='hover:filter hover:saturate-150 transition duration-500 
              z-10 w-full max-w-[400px] md:max-w-[600px]'
          />
        )}
      </div>
      {/* MAIN SECTION */}
      <div className='z-30 basis-1/2 mt-12 md:mt-32'>
        {/* HEADINGS */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className='text-4xl font-playfair z-10 text-center md:text-start'>
            Keeshigan {''}
            <span
              className='xs:relative xs:text-deep-blue xs:font-semibold z-20 
                bg-gradient-orange before:absolute before:-left-[25px] 
                before:-top-[90px] before:z-[-1]'
            >
              Pirabaharan
            </span>
          </p>
          <p className='mt-10 mb-7 text-sm text-center md:text-start'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}

        <motion.div
          className='flex mt-5 justify-center md:justify-start'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className='bg-gradient-orange text-deep-blue rounded-sm py-3 px-7
             font-semibold hover:bg-blue hover:text-white transition duration-500'
            onClick={() => setSelectedPage('contact')}
            href='#contact'
          >
            Contact Me
          </AnchorLink>
          <AnchorLink className='rounded-r-sm bg-gradient-orange text-white py-0.5 pr-0.5'>
            <div
              className='bg-deep-blue hover:text-yellow transition duration-500
             w-full h-full flex items-center justify-center font-playfair px-10'
            >
              Lets' talk.
            </div>
          </AnchorLink>
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
