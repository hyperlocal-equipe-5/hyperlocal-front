interface ButtonProps {
	children: React.ReactNode;
	type: string;
}

enum ButtonType {
	submit = 'submit',
	reset = 'reset',
	button = 'button',
}

const Button = ({ children }: ButtonProps, type: ButtonType) => {
	return (
		<>
			<button
				type={type}
				className="text-[#fefbff] text-3xl mobile:flex mobile:items-center mobile:justify-center mobile:w-auto mobile:h-auto mobile:px-5 mobile:py-2 mobile:bg-[#75ba12] mobile:rounded-xl">
				{children}
			</button>
		</>
	);
};

export default Button;
