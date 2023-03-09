import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';

export const Container = tw.div`
	container
bg-[#010000]
  max-w-full
  h-screen flex
  flex-col
  items-center
  justify-evenly
`;

export const ButtonsBox = tw.div`
  flex
  flex-row
  flex-wrap
  justify-center
  h-auto
  rounded-xl
  bg-[#d1d1d1]
  w-5/6
`;

export const Buttons = tw.button`
  flex  items-center  justify-between
  pl-4 pr-4
  text-xl font-semibold
  mobile:w-full mobile:h-12
  hover:bg-[#75ba12]  hover:text-[#fefbff]  hover:duration-300 hover: cursor-pointer
`;

export const NavButtons = tw(Link)`
  flex  items-center  justify-start
  pl-4 pr-4
  text-xl font-semibold
  mobile:w-full mobile:h-12
  hover:bg-[#75ba12]  hover:text-[#fefbff] hover:duration-300 hover: cursor-pointer
`;

export const Title = tw.h1`
  self-start
  ml-6
  text-3xl
  font-bold
  text-[#75ba12]
`;
