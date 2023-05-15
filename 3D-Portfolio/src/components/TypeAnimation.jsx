import { TypeAnimation } from 'react-type-animation';

const TypedContent = ({ text }) => {
  return (
    <TypeAnimation
      sequence={[...text]}
      wrapper='span'
      cursor={true}
      repeat={Infinity}
    />
  );
};

export default TypedContent;
