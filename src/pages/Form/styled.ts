import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';

export const Container = tw.div`
	container
  flex  flex-col items-start justify-start
bg-[#010000]
  max-w-full  h-screen
  mobile:pb-8 mobile:pt-14 mobile:overflow-x-hidden
`;

export const Title = tw.h1`
  text-4xl text-[#75ba12] font-bold
  mobile:pl-6 mobile:mb-5
`;

export const ContentAddBox = tw.div`
  flex flex-row flex-wrap items-start gap-3 justify-center
  w-full h-full
  border-solid border-red-400 border
`;

export const Box = tw(Link)`
  flex items-center justify-center
  mobile:w-36 mobile h-32 mobile:rounded-2xl
  text-[#fefbff] font-semibold text-2xl
  bg-[#979393]
`;
