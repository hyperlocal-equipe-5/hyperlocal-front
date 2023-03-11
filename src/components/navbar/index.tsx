import {
	AiFillBook,
	AiOutlineBank,
	AiOutlinePlus,
	AiOutlineUser,
	AiTwotoneHome,
} from 'react-icons/ai';
import { Container, NavBox, NavButton, Title } from './styled';

const Navbar = () => {
	return (
		<Container>
			<NavBox>
				<NavButton to="/">
					<AiTwotoneHome />
					<Title>Inicio</Title>
				</NavButton>
				<NavButton to="/menu">
					<AiFillBook />
					<Title>Cardápio</Title>
				</NavButton>
				<NavButton to="/form">
					<AiOutlinePlus />
					<Title>Adicionar</Title>
				</NavButton>
				<NavButton to="/workers">
					<AiOutlineUser />
					<Title>Pessoal</Title>
				</NavButton>
				<NavButton to="/finance">
					<AiOutlineBank />
					<Title>Financeiro</Title>
				</NavButton>
			</NavBox>
		</Container>
	);
};

export default Navbar;
