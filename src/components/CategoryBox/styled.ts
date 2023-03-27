import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';

export const BoxContainer = tw.div`
  flex flex-col
  mobile:w-full mobile:h-60 mobile:overflow-y-scroll
`;
export const TitleCategory = tw(Link)`
  text-[#75ba12] text-4xl font-semibold
  pl-4 pr-4
  border-b-[1px] border-[#75ba12s] border-solid
  `;
// #fefbff #d1d1d1

export const ContentBox = tw.div`
  mobile:w-full mobile:h-48 mobile:overflow-x-auto mobile:overflow-y-hidden
`;
