import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../../../components/Form';
import { type CreateRestaurantDto } from '../../../domain/dto/restaurant/createRestaurant-dto';
import { makeRestaurantAdminRouterFactory } from '../../../infra/api/factories/routers/restaurant/restaurantAdminRouter-factory';
import Button from '../../../style/Button';
import Container from '../../../style/Container';
import FormBox from '../../../style/Form';
import { ButtonType } from '../../../types/ButtonTypes';
import { type InputDto } from '../../../types/Dto/InputDto';
import { InputType } from '../../../types/InputTypes';

const Restaurant: InputDto = {
	activeInputText: true,
	Input: [
		{
			name: 'Restaurante',
			typeInput: InputType.text,
			required: true,
		},
		{
			name: 'Endereço',
			typeInput: InputType.text,
		},
		{
			name: 'Email',
			typeInput: InputType.email,
		},
		{
			name: 'Telefone',
			typeInput: InputType.tel,
		},
	],
};

const AddRestaurant = () => {
	const navigate = useNavigate();
	const [state, setState] = useState<CreateRestaurantDto>({
		name: '',
		address: '',
		email: '',
		telephone: undefined,
	});
	const handleChange = (e: any, field: string) => {
		if (field === 'Restaurante') setState({ ...state, name: e.target.value });
		if (field === 'Endereço') setState({ ...state, address: e.target.value });
		if (field === 'Email') setState({ ...state, email: e.target.value });
		if (field === 'Telefone')
			setState({ ...state, telephone: +e.target.value });
	};
	const handleSubmit = (e: any) => {
		e.preventDefault();
		makeRestaurantAdminRouterFactory()
			.createRestaurant(state)
			.then(() => {
				alert('Item Cadastrado');
				navigate('/add');
			})
			.catch(error => error);
		// console.log(state);
	};
	return (
		<Container>
			<h1 className="text-details">Cadastrar</h1>
			<FormBox OnSubmit={handleSubmit}>
				<Form Input={Restaurant} Function={handleChange} />
				<Button type={ButtonType.submit}>Enviar</Button>
			</FormBox>
		</Container>
	);
};
export default AddRestaurant;
