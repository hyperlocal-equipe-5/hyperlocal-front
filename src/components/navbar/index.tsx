import {
	AiFillBook,
	AiOutlineBank,
	AiOutlinePlus,
	AiOutlineUser,
	AiTwotoneHome,
} from 'react-icons/ai';
import { NavBox, NavButton, Title } from './styled';

const Navbar = () => {
	return (
		<div className="flex flex-row w-full pl-6 pr-6 bg-black text-white mobile:fixed mobile:bottom-0 mobile:h-16">
			<NavBox>
				<NavButton to="/">
					<AiTwotoneHome />
					<Title>Inicio</Title>
				</NavButton>
				<NavButton to="/menu">
					<AiFillBook />
					<Title>Cardápio</Title>
				</NavButton>
				<NavButton to="/add">
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
		</div>
	);
};

export default Navbar;
