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
const Form = () => {
	return (
		<Container>
			<h1 className="text-4xl text-[#75ba12] font-bold mobile:pl-6 mobile:mb-5">
				Adicionar
			</h1>
			<div className="flex flex-row flex-wrap items-start gap-2 justify-center w-full h-full">
				{data.map((el, i) => (
					<Link
						key={i}
						className="flex items-center justify-center mobile:w-36 mobile:h-32 mobile:rounded-2xl text-textColor font-semibold text-2xl bg-box"
						to={el.link}>
						{el.name}
					</Link>
				))}
			</div>
		</Container>
	);
};

export default Form;
