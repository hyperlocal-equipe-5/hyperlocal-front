import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';

export const Container = tw.div`
  flex flex-row
  w-full
  pl-6 pr-6
  bg-black
  text-white
  mobile:fixed mobile:bottom-0 mobile:h-16
`;

export const NavBox = tw.div`
  flex
  w-full
  mobile:text-3xl mobile:h-14
  items-center
  justify-between
  border-solid border-red-400
  `;
export const NavButton = tw(Link)`
  flex flex-col justify-center items-center
  w-full h-full
  cursor-pointer
 `;

export const Title = tw.span`
  text-sm
 `;
