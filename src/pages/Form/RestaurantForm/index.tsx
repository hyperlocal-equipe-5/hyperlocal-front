import DropdownButton from '../../../components/DropdownButton';
import { Container, ContentAddBox, Title } from '../styled';

const RestaurantForm = () => {
	const OnClick = () => {};
	return (
		<Container>
			<Title>Texto</Title>
			<ContentAddBox>
				<div className="w-3/4" data-count="#ffff">
					<h1>aqui</h1>
					<DropdownButton
						addLink={true}
						link="user"
						nameLink="user"
						text="Restaurante"
						names={['teste', 'teste1', 'teste3']}
						OnClick={OnClick}
					/>
				</div>
			</ContentAddBox>
		</Container>
	);
};

export default RestaurantForm;
