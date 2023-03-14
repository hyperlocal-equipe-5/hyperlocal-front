import { useState } from 'react';
import { BiDownArrow, BiRightArrow } from 'react-icons/bi';
import { Buttons, ButtonsBox } from './styled';

interface IButtons {
	text: string;
	codes: string[];
}

const DropdownButton = ({ text, codes }: IButtons) => {
	const [dropDown, setDropDown] = useState(false);

	const handleClick = () => {
		setDropDown(!dropDown);
	};

	return (
		<>
			<ButtonsBox>
				<Buttons type="button" onClick={() => handleClick()}>
					{text} {dropDown ? <BiDownArrow /> : <BiRightArrow />}
				</Buttons>
				<div className={dropDown ? 'h-full w-full' : 'hidden'}>
					{codes.map(el => (
						<Buttons key={el.toString()}>{el}</Buttons>
					))}
				</div>
			</ButtonsBox>
		</>
	);
};

export default DropdownButton;
