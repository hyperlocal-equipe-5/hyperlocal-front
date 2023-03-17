import CategoryBox from '../../components/CategoryBox';
import { Container } from './styled';

const teste = [
	{
		ProductId: '1',
		image: 'restaurante 1',
		NameProduct: 'restaurante 1',
	},
	{
		ProductId: '2',
		image: 'restaurante 2',
		NameProduct: 'restaurante 2',
	},
	{
		ProductId: '3',
		image: 'restaurante 3',
		NameProduct: 'restaurante 3',
	},
	{
		ProductId: '4',
		image: 'restaurante 4',
		NameProduct: 'restaurante 4',
	},
	{
		ProductId: '5',
		image: 'restaurante 5',
		NameProduct: 'restaurante 5',
	},
	{
		ProductId: '6',
		image: 'restaurante 6',
		NameProduct: 'restaurante 6',
	},
];
const teste2 = ['Funcionários', 'Funcionários', 'Funcionários 3'];

const Home = () => {
	return (
		<Container>
			<CategoryBox idCategory="1" NameCategory="Titulo" Product={teste} />
			<CategoryBox idCategory="2" NameCategory="Titulo" Product={teste} />
			<CategoryBox idCategory="3" NameCategory="Titulo" Product={teste} />
			<CategoryBox idCategory="4" NameCategory="Titulo" Product={teste} />
		</Container>
	);
};

export default Home;
