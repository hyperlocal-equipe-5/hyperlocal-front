interface TitleProps {
	children?: React.ReactNode;
	styleInline?: string | undefined;
}

const Title = ({ children, styleInline }: TitleProps) => {
	return (
		<>
			<h1
				className={`flex self-start text-4xl text-details font-bold px-6 pb-3 mb-5 border-b-2 border-details border-solid w-full ${styleInline}`}>
				{children}
			</h1>
		</>
	);
};
export default Title;
