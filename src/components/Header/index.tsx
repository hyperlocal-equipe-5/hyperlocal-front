import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { type RootState } from '../../store/store';
import AsideNavbar from '../AsideNavbar';

interface header {
	active?: boolean;
	link?: string;
}

const Header = ({ link }: header) => {
	const { id } = useParams();
	const [menu, setMenu] = useState(false);

	const restaurant = useSelector(
		(state: RootState) => state.restaurant.value,
	).find(item => item.logo);

	useEffect(() => {}, []);

	return (
		<>
			<div className="flex flex-row self-start mobile:justify-between h-16 w-full fixed top-0 items-center justify-between px-6 py-5 bg-bg z-50">
				<Link to="/" className="text-textColor text-2xl">
					{restaurant?.logo}
				</Link>
				<nav className=" tablet:hidden mobile:hidden flex flex-row justify-evenly w-9/12 tablet:pl-10 text-xl font-semibold text-textColor ">
					<Link
						to="/"
						className="hover:text-details"
						onClick={() => setMenu(false)}>
						Menu
					</Link>
					<Link
						to="/add/order"
						className="hover:text-details"
						onClick={() => setMenu(false)}>
						Pedidos
					</Link>
					<Link
						to="/employees"
						className="hover:text-details"
						onClick={() => setMenu(false)}>
						Colaboradores
					</Link>
					<Link
						to="/tables"
						className="hover:text-details"
						onClick={() => setMenu(false)}>
						Mesas
					</Link>
					<Link
						to="/add"
						className="hover:text-details"
						onClick={() => setMenu(false)}>
						Cadastrar
					</Link>
					<Link to="/login" onClick={() => setMenu(false)}>
						Login
					</Link>
				</nav>
			</div>
			{menu ? <AsideNavbar /> : <></>}
		</>
	);
};

export default Header;
