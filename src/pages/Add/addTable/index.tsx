import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Form from '../../../components/Form';
import { type CreateTableDto } from '../../../domain/dto/table/createTable-dto';
import { type Restaurant } from '../../../domain/entities/restaurant';
import { makeTableAdminRouterFactory } from '../../../infra/api/factories/routers/table/tableAdminRouter-factory';
import { type RootState } from '../../../store/store';
import Button from '../../../style/Button';
import Container from '../../../style/Container';
import FormBox from '../../../style/Form';
import { ButtonType } from '../../../types/ButtonTypes';
import { type InputDto } from '../../../types/Dto/InputDto';
import { InputType } from '../../../types/InputTypes';

const AddTable = () => {
	const restaurant = useSelector((state: RootState) => state.restaurant.value);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const table = (restaurantArray: Restaurant[]): InputDto => {
		return {
			activeInputText: true,
			Input: [
				{
					name: 'Número da mesa',
					required: true,
					typeInput: InputType.text,
				},
			],
			activeSelection: true,
			Selection: [
				{
					name: 'Restaurante',
					selections: {
						names: restaurantArray,
						addLink: true,
						link: '/add/restaurant',
						nameLink: 'Adicionar novo restaurante',
					},
				},
			],
		};
	};

	const [state, setState] = useState<CreateTableDto>({
		number: 0,
		restaurant: '',
	});

	const handleChange = (e: any, field: string) => {
		if (field === 'Número da mesa')
			setState({ ...state, number: e.target.value });
		if (field === 'Restaurante')
			setState({ ...state, restaurant: e.target.value });
	};
	console.log(state);

	const handleSubmit = (e: any) => {
		e.preventDefault();

		makeTableAdminRouterFactory()
			.createTable(state)
			.then(() => navigate('/tables'))
			.catch(error => error);
	};

	return (
		<Container>
			<h1 className="text-textColor">teste</h1>
			<FormBox OnSubmit={handleSubmit}>
				<Form Function={handleChange} Input={table(restaurant)} />
				<Button type={ButtonType.submit}>Cadastrar</Button>
			</FormBox>
		</Container>
	);
};

export default AddTable;
