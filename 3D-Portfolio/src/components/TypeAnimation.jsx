import { TypeAnimation } from 'react-type-animation';

const TypedContent = ({ text, setIsCompleted }) => {
  return (
    <TypeAnimation
      sequence={[
        ...text,
        () => {
          window.localStorage.setItem('isDoneLoading', 'true');
          return setIsCompleted(true);
        },
      ]}
      wrapper='span'
      cursor={true}
      repeat={Infinity}
      speed={50}
      deletionSpeed={65}
    />
  );
};

export default TypedContent;
