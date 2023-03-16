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
				link="produto"
				ingredient={ingredient}
			/>
			<ProductButton
				name="Produto"
				img="teste.jpg"
				link="produto"
				ingredient={ingredient}
			/>
			<ProductButton
				name="Produto"
				img="teste.jpg"
				link="produto"
				ingredient={ingredient}
			/>
			<ProductButton
				name="Produto"
				img="teste.jpg"
				link="produto"
				ingredient={ingredient}
			/>
		</Container>
	);
};
export default CategoryPage;
