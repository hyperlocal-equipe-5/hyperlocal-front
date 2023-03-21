import {} from 'react';
import { Box, Container, ContentAddBox, Title } from './styled';

const Form = () => {
	return (
		<Container>
			<Title>Adicionar</Title>
			<ContentAddBox>
				<Box to="/add/restaurant">Restaurante</Box>
				<Box to="/add">Categoria</Box>
				<Box to="/add">Produto</Box>
				<Box to="/add/user">Usuário</Box>
				<Box to="/add/role">Cargo</Box>
				<Box to="/add">Pedido</Box>
				<Box to="/add/role">Mesa</Box>
				<Box to="/add">Ingrediente</Box>
			</ContentAddBox>
		</Container>
	);
};

export default Form;
