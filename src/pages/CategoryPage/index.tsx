import ProductButton from '../../components/ProductButton';
import { Container, Title } from './styled';

const ingredient = [
	'teste',
	'teste',
	'teste',
	'teste',
	'teste',
	'teste',
	'teste',
	'teste',
];

const CategoryPage = () => {
	return (
		<Container>
			<Title>Teste</Title>
			<ProductButton
				name="Produto"
				img="teste.jpg"
				ProductId="1"
				ingredient={ingredient}
			/>
			<ProductButton
				name="Produto"
				img="teste.jpg"
				ProductId="2"
				ingredient={ingredient}
			/>
			<ProductButton
				name="Produto"
				img="teste.jpg"
				ProductId="3"
				ingredient={ingredient}
			/>
			<ProductButton
				name="Produto"
				img="teste.jpg"
				ProductId="4"
				ingredient={ingredient}
			/>
		</Container>
	);
};
export default CategoryPage;
