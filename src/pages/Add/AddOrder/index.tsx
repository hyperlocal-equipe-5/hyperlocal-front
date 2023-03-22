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

const AddOrder = () => {
	const Restaurant: InputDto = {};
	const navigate = useNavigate();
	const [restaurant, setRestaurant] = useState('');
	const [state, setState] = useState<CreateOrderDto>({
		products: [],
		quantities: [],
		restaurant,
		customerName: '',
		table: '',
		takeAway: false,
		user: '',
	});

	const handleChange = (e: any, field: string) => {
		// if (field === 'Restaurante') setState({ ...state, name: e.target.value });
		// if (field === 'Endereço') setState({ ...state, address: e.target.value });
		// if (field === 'Email') setState({ ...state, email: e.target.value });
		// if (field === 'Telefone') setState({ ...state, telephone: e.target.value });
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();

		// console.log(state);
	};

	useEffect(() => {
		const restaurante = new RestaurantIdHandler().get();
		setRestaurant(restaurante);
	}, [restaurant]);

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
export default AddOrder;
