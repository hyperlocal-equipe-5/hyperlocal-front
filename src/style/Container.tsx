interface ContainerProps {
	children: React.ReactNode;
	styleInline?: string;
}

const Container = ({ children, styleInline }: ContainerProps) => {
	return (
		<div
			className={`flex flex-col justify-start items-center w-full min-h-screen max-h-full pt-8 mobile:py-16 mobile:overflow-x-hidden overflow-auto bg-bg ${styleInline}`}>
			{children}
		</div>
	);
};

export default Container;
