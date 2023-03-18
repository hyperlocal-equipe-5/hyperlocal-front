import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';

export const Container = tw.div`

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
  mobile:pl-1 mobile:pr-1
  cursor-pointer
 `;

export const Title = tw.span`
  text-xs
 `;
