import tw from 'tailwind-styled-components';

export const Container = tw.div`
  flex flex-col items-center justify-between
  w-full min-h-screen max-h-full
  py-16 mobile:overflow-x-hidden
  bg-[#010000]
`;

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

export const CartButton = tw.button`
  text-[#fefbff] text-3xl
  mobile:flex mobile:items-center mobile:justify-center
  mobile:w-auto mobile:h-auto mobile:px-5 mobile:py-2  mobile:bg-[#75ba12] mobile:rounded-xl
`;
