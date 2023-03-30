import {
	AiFillBook,
	AiOutlineBank,
	AiOutlinePlus,
	AiOutlineUser,
	AiTwotoneHome,
} from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { type RootState } from '../../store/store';
import { NavButton, Title } from './styled';

const Navbar = () => {
	const { id } = useParams();
	const role = useSelector((state: RootState) => state.role.value);
	return (
		<div className="hidden tablet:flex tablet:flex-row tablet:w-full tablet:fixed tablet:bottom-0 tablet:h-20 tablet:text-3xl mobile:flex mobile:flex-row mobile:w-full mobile:px-6 bg-bg text-textColor mobile:fixed mobile:bottom-0 mobile:h-16">
			<div className=" flex w-full mobile:text-3xl mobile:h-14 items-center justify-between border-solid border-red-400">
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
				<NavButton to="/employees">
					<AiOutlineUser />
					<Title>Pessoal</Title>
				</NavButton>
				<NavButton to="/finance">
					<AiOutlineBank />
					<Title>Financeiro</Title>
				</NavButton>
			</div>
			{/* <SetRestaurant /> */}
		</div>
	);
};

export default Navbar;
