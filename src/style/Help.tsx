import { IoIosHelpCircleOutline } from 'react-icons/io';

interface HelpProps {
	children?: React.ReactNode;
	Text: string | undefined;
}

const Help = ({ children, Text }: HelpProps) => {
	return (
		<>
			<div
				className={`flex flex-row items-center text-textColor text-2xl pl-1`}
				title={Text}>
				<IoIosHelpCircleOutline className="text-textColor" />
			</div>
		</>
	);
};

export default Help;
