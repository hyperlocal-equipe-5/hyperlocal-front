import { IoIosHelpCircleOutline } from 'react-icons/io';

interface HelpProps {
	children: React.ReactNode;
}

const Help = ({ children }: HelpProps) => {
	return (
		<>
			<div
				className={`flex flex-row items-center text-textColor text-2xl pl-1`}
				title={children}>
				<IoIosHelpCircleOutline className="text-textColor" />
			</div>
		</>
	);
};

export default Help;
