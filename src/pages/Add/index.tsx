import { Link } from 'react-router-dom';
import Container from '../../style/Container';

interface IForm {
	link: string;
	name: string;
}

const data: IForm[] = [
	{
		name: 'Restaurante',
		link: '/add/restaurant',
	},
	{
		name: 'Categoria',
		link: '/add/category',
	},
	{
		name: 'Produto',
		link: '/add/product',
	},
	{
		name: 'Usuário',
		link: '/add/user',
	},
	{
		name: 'Função',
		link: '/add/role',
	},
	{
		name: 'Pedidos',
		link: '/add/order',
	},
	{
		name: 'Mesa',
		link: '/add/table',
	},
	{
		name: 'Ingrediente',
		link: '/add/ingredient',
	},
];

const Add = () => {
	return (
		<Container styleInline="overflow-y-hidden">
			<div className="flex flex-col items-center overflow-x-hidden justify-center py-3 w-auto">
				<div className="flex flex-col items-start justify-center w-auto">
					<h1 className="text-4xl text-details font-bold px-6 mb-5">
						Adicionar
					</h1>
					<div className="grid grid-cols-4 tablet:flex tablet:flex-row tablet:flex-wrap mobile:flex mobile:flex-row mobile:flex-wrap items-start justify-center px-6 gap-2 ">
						{data.map((el, i) => (
							<Link
								key={i}
								className="flex items-center h-64 w-64 justify-center mobile:w-36 mobile:h-32 hover:duration-300 hover:bg-details rounded-2xl text-textColor font-semibold text-2xl bg-box"
								to={el.link}>
								{el.name}
							</Link>
						))}
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Add;
