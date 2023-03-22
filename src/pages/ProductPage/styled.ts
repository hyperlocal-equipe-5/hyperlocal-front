import tw from 'tailwind-styled-components';

export const Cover = tw.img`
  mobile:bg-cover mobile:h-64 mobile:w-full mobile:rounded-b-[15%]
  bg-white
`;

export const ContentBox = tw.div`
  flex flex-col justify-start items-start
  mobile:min-h-[15rem] mobile:max-h-full mobile:w-full mobile:p-4
`;

export const ProductTitle = tw.h2`
  text-3xl text-[#75ba12] capitalize
  mobile:pb-4
`;

export const BoxItem = tw.div`
  mobile:flex mobile:flex-row mobile:pt-10
`;

export const ItemName = tw.input`
   text-2xl text-[#fefbff] capitalize
   mobile:pt-10
`;

export const PriceBox = tw.div`
  mobile:flex mobile:flex-row mobile:justify-between  mobile:items-center mobile:w-full mobile:h-20 mobile:p-4 mobile:border-solid mobile:border-t-[1px] mobile:border-[#75ba12]
`;

export const Price = tw.p`
  text-[#fefbff] text-2xl font-black
`;
