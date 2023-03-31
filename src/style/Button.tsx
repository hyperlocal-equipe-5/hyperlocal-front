import { type ButtonType } from '../types/ButtonTypes';

interface ButtonProps {
	children: React.ReactNode;
	type: ButtonType;
	styleInline?: string;
	callbackFunction?: () => void;
}

const Button = ({
	children,
	type,
	styleInline,
	callbackFunction,
}: ButtonProps) => {
	return (
		<>
			<button
				onClick={() => {
					if (callbackFunction) {
						callbackFunction();
					}
				}}
				type={type}
				className={`text-textColor text-xl flex items-center justify-center w-auto h-auto px-5 py-2 bg-details rounded-xl ${styleInline}`}>
				{children}
			</button>
		</>
	);
};

export default Button;
