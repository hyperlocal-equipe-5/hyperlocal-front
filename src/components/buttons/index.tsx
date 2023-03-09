import { useState } from 'react';
import { BiDownArrow, BiRightArrow } from 'react-icons/bi';
import { Buttons, ButtonsBox, NavButtons } from './styled';

interface IButtons {
	text: string;
	click?: () => void;
	itensName: string[];
	link: string[];
}

const DropdownButton = ({ text, itensName, link }: IButtons) => {
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
				<div className={dropDown ? 'w-full' : 'hidden'}>
					{itensName.map((el, i) => (
						<NavButtons to={link[i]} key={el.toString()}>
							{el}
						</NavButtons>
					))}
				</div>
			</ButtonsBox>
		</>
	);
};

export default DropdownButton;
