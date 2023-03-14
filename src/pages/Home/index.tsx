import CategoryBox from '../../components/CategoryBox';
import { Container } from './styled';

const teste = [
	{
		LinkProduct: 'restaurante1',
		image: 'restaurante 2',
		NameProduct: 'restaurante 3',
	},
	{
		LinkProduct: 'restaurante2',
		image: 'restaurante 2',
		NameProduct: 'restaurante 3',
	},
	{
		LinkProduct: 'restaurante3',
		image: 'restaurante 2',
		NameProduct: 'restaurante 3',
	},
	{
		LinkProduct: 'restaurante4',
		image: 'restaurante 2',
		NameProduct: 'restaurante 3',
	},
	{
		LinkProduct: 'restaurante',
		image: 'restaurante 2',
		NameProduct: 'restaurante 3',
	},
	{
		LinkProduct: 'restaurante1',
		image: 'restaurante 1',
		NameProduct: 'restaurante 4',
	},
];
const teste2 = ['Funcionários', 'Funcionários', 'Funcionários 3'];

const Home = () => {
	return (
		<Container>
			<CategoryBox LinkCategory="teste" NameCategory="Titulo" Product={teste} />
			<CategoryBox LinkCategory="teste" NameCategory="Titulo" Product={teste} />
			<CategoryBox LinkCategory="teste" NameCategory="Titulo" Product={teste} />
			<CategoryBox LinkCategory="teste" NameCategory="Titulo" Product={teste} />
		</Container>
	);
};

export default Home;
