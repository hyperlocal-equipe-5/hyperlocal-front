import tw from 'tailwind-styled-components';

export const BoxContainer = tw.div`
  flex flex-col
  mobile:w-full mobile:h-52 mobile:overflow-x-scroll
  border border-solid border-red-500
`;
export const Title = tw.h1`
  text-[#75ba12] text-4xl font-semibold
  pl-4 pr-4
  border-b-[1px] border-[#75ba12s] border-solid
  `;
// #fefbff #d1d1d1

export const ScrollBoxdobox = tw.div`
  mobile:w-full mobile:h-40 mobile:overflow-x-auto mobile:overflow-y-hidden
`;
export const ScrollBox = tw.div`
  mobile:flex mobile:flex-row
  mobile:w-max mobile:h-40 mobile:overflow-x-auto mobile:overflow-y-hidden
  mt-2 ml-4  mr-4
`;

export const ProductBox = tw.button`
  flex flex-col items-center
  mobile:w-40 mobile:h-40
  pl-1 pr-1 mr-3
  border border-solid border-red-500
`;
