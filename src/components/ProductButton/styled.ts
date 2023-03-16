import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';

export const ContentBox = tw.div`
  mobile:w-full mobile:h-auto mobile:overflow-x-hidden mobile:overflow-y-auto
`;

export const ProductBox = tw(Link)`
  flex flex-row
  w-full h-auto px-4 py-3
  border-b-[1px] border-solid border-gray-400
`;

export const ProductImage = tw.img`
  mobile:h-24 mobile:w-24 bg-white
`;

export const ProductBoxText = tw.div`
  flex flex-col items-start
  max-w-full h-full
`;

export const ProductTitle = tw.h2`
  text-[#75ba12] text-xl font-semibold
  px-4
 `;
export const ProductText = tw.div`
  mobile:flex mobile:flex-row mobile:flex-wrap  mobile:w-56 mobile:h-auto
  text-sm text-justify
  px-4
 `;
