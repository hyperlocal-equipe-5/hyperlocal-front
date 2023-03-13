import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';

export const BoxContainer = tw.div`
  flex flex-col
  mobile:w-full mobile:h-60 mobile:overflow-y-hidden mobile:my-4
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
export const ScrollBox = tw.div`
  mobile:flex mobile:flex-row
  mobile:w-max mobile:h-full mobile:overflow-x-auto mobile:overflow-y-hidden
  mt-2
`;

export const ProductBox = tw(Link)`
  flex flex-col items-start
  mobile:w-40 mobile:h-40
  pl-1 pr-1 mr-3 ml-3
  text-[#fefbff]
`;

export const Title = tw.h2`
  flex items-start
  text-xl text-[#fefbff] font-semibold

`;

export const Image = tw.img`
  w-full mobile:h-full bg-white
`;
