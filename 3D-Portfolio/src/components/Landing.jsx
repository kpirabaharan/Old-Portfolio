import { styles } from '../styles';
import { typedLanding } from '../constants';
import TypedContent from './TypeAnimation';

const Landing = ({ setIsCompleted }) => {
  return (
    <section className='w-full h-screen mx-auto'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <h1 className={`${styles.heroHeadText} text-white`}>
          Hi, I'm <span className='text-[#3d38c9]'>Keeshigan</span>
        </h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          <TypedContent text={typedLanding} setIsCompleted={setIsCompleted} />
        </p>
      </div>
    </section>
  );
};

export default Landing;
