import { useState } from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';
import AsideNavbar from '../AsideNavbar';
import { SetRestaurant } from '../SetRestaurant/SetRestaurant';

interface header {
	active?: boolean;
	link?: string;
}

const Header = ({ link }: header) => {
	const { id } = useParams();
	const [menu, setMenu] = useState(false);
	return (
		<>
			<div className="flex flex-row self-start mobile:justify-between h-16 w-full fixed top-0 items-center justify-between px-6 bg-bg z-50">
				<Link to="/">
					<AiOutlineLeft className=" hidden text-2xl font-semibold mobile:text-details mobile:flex text-textColor" />
				</Link>
				<Link to="/" className="text-textColor text-2xl">
					Logo
				</Link>
				<nav className=" mobile:hidden flex flex-row justify-evenly w-9/12 tablet:pl-10 text-xl font-semibold text-textColor">
					<Link to="/" onClick={() => setMenu(false)}>
						Inicio
					</Link>
					<Link to="/menu" onClick={() => setMenu(false)}>
						Menu
					</Link>
					<Link to="/" onClick={() => setMenu(false)}>
						Pedidos
					</Link>
					<Link to="/employees" onClick={() => setMenu(false)}>
						Funcionários
					</Link>
					<Link to="/tables" onClick={() => setMenu(false)}>
						Mesas
					</Link>
					<Link to="/add" onClick={() => setMenu(false)}>
						Cadastrar
					</Link>
					<SetRestaurant />
				</nav>
			</div>
			{menu ? <AsideNavbar /> : <></>}
		</>
	);
};

export default Header;
