import tw from 'tailwind-styled-components';

export const ButtonsBox = tw.div`
  flex
  flex-row
  flex-wrap
  justify-center
  h-auto
  mt-1 mb-1
  rounded-xl
  bg-[#d1d1d1]
  w-full
`;

export const Buttons = tw.button`
  flex  items-center  justify-between
  pl-4 pr-4
  text-xl font-semibold
  mobile:w-full mobile:h-12
  hover:bg-[#75ba12]  hover:text-[#fefbff]  hover:duration-300 hover: cursor-pointer
`;

export const Title = tw.h1`
  self-start
  ml-6
  text-3xl
  font-bold
  text-[#75ba12]
`;
