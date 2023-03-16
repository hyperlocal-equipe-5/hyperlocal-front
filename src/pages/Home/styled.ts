import tw from 'tailwind-styled-components';

export const Container = tw.div`
	container
  flex  flex-col items-start justify-end
bg-[#010000]
  max-w-full  min-h-screen max-h-full
  mobile:pb-8 mobile:pt-8 mobile:overflow-y-hidden
`;