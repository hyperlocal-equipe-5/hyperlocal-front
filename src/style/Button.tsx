interface ButtonProps {
	children: React.ReactNode;
	type: ButtonType;
}

export enum ButtonType {
	submit = 'submit',
	reset = 'reset',
	button = 'button',
}

const Button = ({ children, type }: ButtonProps) => {
	return (
		<>
			<button
				type={type}
				className="text-textColor text-3xl flex items-center justify-center w-auto h-auto px-5 py-2 bg-details rounded-xl">
				{children}
			</button>
		</>
	);
};

export default Button;
