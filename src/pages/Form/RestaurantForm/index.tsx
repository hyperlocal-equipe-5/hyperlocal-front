import { ButtonsBox, Container, NavButtons, Title } from '../styled';

const RestaurantForm = () => {
	return (
		<Container>
			<Title>Texto</Title>
			<ButtonsBox>
				<div data-count="#ffff">
					<h1>aqui</h1>
				</div>
				<NavButtons to="/form">Foi</NavButtons>
			</ButtonsBox>
		</Container>
	);
};

export default RestaurantForm;
