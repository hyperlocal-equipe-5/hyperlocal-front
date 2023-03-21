import { useEffect, useState } from 'react';
import Form1 from '../../components/Form1';
import Button, { ButtonType } from '../../style/Button';
import { Container } from './styled';

const teste = [
	{
		id: 'read',
		checkboxName: 'Ver',
	},
	{
		id: 'create',
		checkboxName: 'criar',
	},
	{
		id: 'edit',
		checkboxName: 'editar',
	},
	{
		id: 'exclude',
		checkboxName: 'excluir',
	},
];

const teste2 = [
	{
		name: 'Restaurante',
	},
];
const teste3 = [{ name: 'teste', selections: ['teste1', 'teste2'] }];

interface ICheck {
	name: string;
	check: boolean;
}

const Home = () => {
	const [click, setClick] = useState<any>();
	const [text, setText] = useState<string>('');
	const [checkbox, setCheckbox] = useState<ICheck>();
	const [select, setSelect] = useState<string>('');

	const HandleChange = (e: any) => {
		setText(e.target.value);
		setSelect(e.target.textContent);
		setCheckbox({ name: e.target.value, check: e.target.checked });
	};

	const handleSubmit = (event: any) => {
		event.preventDefault();
		setClick({ text, checkbox, select });
	};

	useEffect(() => {
		console.log('valores', click);
	}, [click]);

	return (
		<Container>
			<form
				onSubmit={e => handleSubmit(e)}
				autoComplete="off"
				className="flex flex-col w-full h-auto items-center justify-center">
				<Form1
					activeCheckbox={true}
					ICheckbox={teste}
					activeInputText={true}
					IInput={teste2}
					styleCheckbox="flex flex-row w-26 h-8 justify-center gap-3 rounded-xl mobile:w-full"
					activeSelection={true}
					ISelection={teste3}
					Function={e => HandleChange(e)}
				/>
				<Button type={ButtonType.submit}>Texto</Button>
			</form>
		</Container>
	);
};

export default Home;
