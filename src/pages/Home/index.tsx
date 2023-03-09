import DropdownButton from '../../components/buttons';
import { Container } from '../Form/styled';
import { Box } from './styled';

const teste = ['restaurante 1', 'restaurante 2', 'restaurante 3'];
const teste2 = ['Funcionários', 'Funcionários', 'Funcionários 3'];
const Home = () => {
	return (
		<Container>
			<Box>
				<DropdownButton text={'Home'} itensName={teste} link={teste} />
				<DropdownButton text={'Cardápio'} itensName={teste} link={teste} />
				<DropdownButton text={'Funcionários'} itensName={teste2} link={teste} />
				<DropdownButton text={'Financeiro'} itensName={teste} link={teste} />
			</Box>
		</Container>
	);
};

export default Home;
