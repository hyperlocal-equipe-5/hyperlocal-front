interface ContainerProps {
	children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
	return (
		<div className="flex flex-col items-center justify-between w-full min-h-screen max-h-full py-16 mobile:overflow-x-hidden bg-bg">
			{children}
		</div>
	);
};

export default Container;
