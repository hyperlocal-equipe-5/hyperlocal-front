import { useEffect, useState } from 'react';
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
	// const gestor = useSelector((state: RootState) => state.role.value);

	useEffect(() => {}, []);

	return (
		<>
			<div className="flex flex-row self-start mobile:justify-between h-16 w-full fixed top-0 items-center justify-between px-6 py-5 bg-bg z-50">
				<Link to="/">
					<AiOutlineLeft className=" hidden text-2xl tablet:flex font-semibold mobile:text-details mobile:flex text-textColor" />
				</Link>
				<Link to="/" className="text-textColor text-2xl">
					Logo
				</Link>
				<nav className=" tablet:hidden mobile:hidden flex flex-row justify-evenly w-9/12 tablet:pl-10 text-xl font-semibold text-textColor ">
					<Link
						to="/"
						className="hover:text-details"
						onClick={() => setMenu(false)}>
						Inicio
					</Link>
					<Link
						to="/menu"
						className="hover:text-details"
						onClick={() => setMenu(false)}>
						Menu
					</Link>
					<Link
						to="/"
						className="hover:text-details"
						onClick={() => setMenu(false)}>
						Pedidos
					</Link>
					<Link
						to="/employees"
						className="hover:text-details"
						onClick={() => setMenu(false)}>
						Funcionários
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
					{/* <SetRestaurant /> */}
				</nav>
			</div>
			{menu ? <AsideNavbar /> : <></>}
		</>
	);
};

export default Header;
