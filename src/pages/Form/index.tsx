import { useState } from 'react';
import { BiDownArrow, BiRightArrow } from 'react-icons/bi';
import { Buttons, ButtonsBox, Container, NavButtons, Title } from './styled';

const Form = () => {
	const [dropDown, setDropDown] = useState(false);
	function handleClick() {
		setDropDown(!dropDown);
	}
	return (
		<Container>
			<Title>Config</Title>
			<ButtonsBox>
				<Buttons type="button" onClick={handleClick}>
					Restaurantes{dropDown ? <BiDownArrow /> : <BiRightArrow />}
				</Buttons>
				<div className={dropDown ? 'w-full' : 'hidden'}>
					<NavButtons to="/restaurantes">Restaurante 1</NavButtons>
					<NavButtons to="/restaurantes">Restaurante 2</NavButtons>
					<NavButtons to="/restaurantes">Restaurante 3</NavButtons>
				</div>
			</ButtonsBox>
		</Container>
	);
};

export default Form;
