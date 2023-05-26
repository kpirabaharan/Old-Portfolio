import { TypeAnimation } from 'react-type-animation';

const TypedContent = ({ text }) => {
  return (
    <TypeAnimation
      sequence={[...text]}
      wrapper='span'
      cursor={true}
      repeat={Infinity}
      speed={50}
      deletionSpeed={65}
    />
  );
};

export default TypedContent;
