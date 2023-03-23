import {
	AiFillBook,
	AiOutlineBank,
	AiOutlinePlus,
	AiOutlineUser,
	AiTwotoneHome,
} from 'react-icons/ai';
import { SetRestaurant } from '../SetRestaurant/SetRestaurant';
import { NavBox, NavButton, Title } from './styled';

const Navbar = () => {
	return (
		<div className="mobile:flex mobile:flex-row mobile:w-full mobile:px-6 bg-bg text-textColor mobile:fixed mobile:bottom-0 mobile:h-16">
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
			<SetRestaurant />
		</div>
	);
};

export default Navbar;
