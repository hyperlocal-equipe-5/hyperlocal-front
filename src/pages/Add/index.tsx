import { Outlet, useNavigate } from 'react-router-dom';
import BoxButton from '../../components/BoxButton';
import Container from '../../style/Container';
import Title from '../../style/Title';

interface IForm {
	link: string;
	name: string;
}

const data: IForm[] = [
	{
		name: 'Restaurante',
		link: 'restaurant',
	},
	{
		name: 'Categoria',
		link: 'category',
	},
	{
		name: 'Produto',
		link: 'product',
	},
	{
		name: 'Usuário',
		link: 'user',
	},
	{
		name: 'Função',
		link: 'role',
	},
	{
		name: 'Pedidos',
		link: 'order',
	},
	{
		name: 'Mesa',
		link: 'table',
	},
	{
		name: 'Ingrediente',
		link: 'ingredient',
	},
];

const Add = () => {
	const navigate = useNavigate();
	return (
		<Container styleInline="overflow-y-hidden">
			<div className="flex flex-col items-center overflow-x-hidden justify-center py-3 max-w-[1300px] w-auto">
				<div className="flex flex-col items-start justify-center w-auto">
					<Title>Adicionar</Title>
					<div className="flex flex-row flex-wrap  items-start justify-center px-6 gap-y-10">
						{data.map((el, i) => (
							<BoxButton
								key={i}
								img={el.name}
								title={el.name}
								click={() => navigate(`${el.link}`)}
							/>
						))}
					</div>
				</div>
			</div>
			<Outlet />
		</Container>
	);
};

export default Add;
