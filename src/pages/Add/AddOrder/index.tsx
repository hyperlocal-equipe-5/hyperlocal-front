import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../../../components/Form';
import { type CreateOrderDto } from '../../../domain/dto/order/createOrder-dto';
import { RestaurantIdHandler } from '../../../helpers/handlers/restaurantId/restaurantIdHandler-helper';
import Button from '../../../style/Button';
import Container from '../../../style/Container';
import FormBox from '../../../style/Form';
import { ButtonType } from '../../../types/ButtonTypes';
import { type InputDto } from '../../../types/Dto/InputDto';
import { InputType } from '../../../types/InputTypes';

const AddOrder = () => {
	const OrderInto: InputDto = {
		activeInputText: true,
		Input: [
			{
				name: 'Seu nome',
				typeInput: InputType.text,
				required: true,
			},
		],
		activeCheckbox: true,
		Checkbox: [
			{
				id: 'takeaway',
				name: 'Para levar',
				help: true,
				textHelp: 'Levar o pedido para casa',
			},
		],
	};
	const navigate = useNavigate();
	const [restaurant, setRestaurant] = useState('');
	const [state, setState] = useState<CreateOrderDto>({
		finished: false,
		products: [],
		takeAway: false,
		table: '',
		customerName: '',
		restaurant: new RestaurantIdHandler().get(),
	});

	const handleChange = (e: any, field: string) => {
		if (field === 'Seu nome')
			setState({ ...state, customerName: e.target.value });
		if (field === 'Para levar')
			setState({ ...state, takeAway: e.target.checked });
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();

		console.log(state);
	};

	useEffect(() => {
		const restaurante = new RestaurantIdHandler().get();
		setRestaurant(restaurante);
	}, [restaurant]);

	return (
		<Container>
			<h1 className="text-details">Cadastrar</h1>
			<FormBox OnSubmit={handleSubmit}>
				<Form Input={OrderInto} Function={handleChange} />
				<Button type={ButtonType.submit}>Enviar</Button>
			</FormBox>
		</Container>
	);
};
export default AddOrder;
