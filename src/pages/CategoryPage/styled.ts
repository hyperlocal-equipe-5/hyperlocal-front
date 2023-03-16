import tw from 'tailwind-styled-components';

export const Container = tw.div`
  flex flex-col items-center justify-start
  w-full min-h-screen max-h-full
  py-14
  text-white bg-[#010000]
`;

export const Title = tw.h1`
  text-[#75ba12] text-4xl font-semibold
  px-4 mobile:w-full
  border-b-[1px] border-[#75ba12s] border-solid
`;
