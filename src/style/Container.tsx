interface ContainerProps {
	children: React.ReactNode;
	styleInline?: string;
}

const Container = ({ children, styleInline }: ContainerProps) => {
	return (
		<div
			className={`flex flex-col items-center justify-start w-full min-h-screen max-h-full tablet:pb-20 py-16 mobile:overflow-x-hidden bg-bg ${styleInline}`}>
			{children}
		</div>
	);
};

export default Container;
