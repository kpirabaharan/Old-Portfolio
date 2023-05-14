import { TypeAnimation } from 'react-type-animation';

const TypedContent = ({ text }) => {
  return (
    <TypeAnimation
      sequence={[...text]}
      wrapper='span'
      cursor={true}
      repeat={0}
    />
  );
};

export default TypedContent;
