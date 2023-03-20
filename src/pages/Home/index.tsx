import Form1 from '../../components/Form';
import { Container } from './styled';

const Home = () => {
	const HandleChange = (e: any) => {
		console.log(e.target.value);
	};

	const teste = [
		{
			id: 'read',
			checkboxName: 'Ver',
			Checkbox: HandleChange,
		},
		{
			id: 'create',
			checkboxName: 'criar',
			Checkbox: HandleChange,
		},
		{
			id: 'edit',
			checkboxName: 'editar',
			Checkbox: HandleChange,
		},
		{
			id: 'exclude',
			checkboxName: 'excluir',
			Checkbox: HandleChange,
		},
	];

	const teste2 = [
		{
			name: 'Restaurante',
			InputText: HandleChange,
		},
	];

	return (
		<Container>
			<div className="flex flex-row w-full h-16 items-start justify-center">
				<Form1
					activeCheckbox={true}
					ICheckbox={teste}
					activeInputText={true}
					Input={teste2}
				/>
			</div>
		</Container>
	);
};

export default Home;
