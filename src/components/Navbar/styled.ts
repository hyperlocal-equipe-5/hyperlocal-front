import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';

export const NavButton = tw(Link)`
  flex flex-col justify-center items-center
  w-full h-full
  mobile:pl-1 mobile:pr-1
  cursor-pointer
 `;

export const Title = tw.span`
  text-xs
 `;
