import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Form from '../../../components/Form';
import { type CreateUserDto } from '../../../domain/dto/user/createUser-dto';
import { type Restaurant } from '../../../domain/entities/restaurant';
import { type Role } from '../../../domain/entities/role';
import { makeUserAdminRouterFactory } from '../../../infra/api/factories/routers/user/userAdminRouter-factory';
import { type RootState } from '../../../store/store';
import Button from '../../../style/Button';
import Container from '../../../style/Container';
import FormBox from '../../../style/Form';
import { ButtonType } from '../../../types/ButtonTypes';
import { type InputDto } from '../../../types/Dto/InputDto';
import { InputType } from '../../../types/InputTypes';

const AddUser = () => {
	const navigate = useNavigate();
	const restaurant = useSelector((state: RootState) => state.restaurant.value);
	const role = useSelector((state: RootState) => state.role.value);
	const [state, setState] = useState<CreateUserDto>({
		name: '',
		email: '',
		password: '',
		restaurant: '',
		cellphone: undefined,
		image: '',
		role: '',
	});

	const CreateUser = (
		restaurantArray: Restaurant[],
		roleArray: Role[],
	): InputDto => {
		return {
			activeInputText: true,
			Input: [
				{
					name: 'Nome',
					typeInput: InputType.text,
					required: true,
				},
				{
					name: 'Email',
					typeInput: InputType.email,
				},
				{
					name: 'Senha',
					typeInput: InputType.password,
				},
				{
					name: 'Telefone',
					typeInput: InputType.tel,
				},
			],
			activeSelection: true,
			Selection: [
				{
					name: ' Restaurante',
					selections: {
						names: restaurantArray,
						addLink: true,
						link: '/add/restaurant',
						nameLink: 'Adicionar novo restaurante',
					},
				},
				{
					name: 'Função',
					selections: {
						names: roleArray,
						addLink: true,
						link: '/add/role',
						nameLink: 'Adicionar novo função',
					},
				},
			],
		};
	};

	const handleChange = (e: any, field: string) => {
		if (field === 'Nome') setState({ ...state, name: e.target.value });
		if (field === 'Restaurante')
			setState({ ...state, restaurant: e.target.value });
		if (field === 'Função') setState({ ...state, role: e.target.value });
		if (field === 'Email') setState({ ...state, email: e.target.value });
		if (field === 'Senha') setState({ ...state, password: e.target.value });
		if (field === 'Imagem') setState({ ...state, image: e.target.value });
		if (field === 'Telefone')
			setState({ ...state, cellphone: +e.target.value });
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		makeUserAdminRouterFactory()
			.createUser(state)
			.then(() => {
				alert('Item Cadastrado');
				navigate('/add');
			})
			.catch(error => error);
	};
	return (
		<Container>
			<h1 className="text-details">Cadastrar</h1>
			<FormBox OnSubmit={handleSubmit}>
				<Form Input={CreateUser(restaurant, role)} Function={handleChange} />
				<Button type={ButtonType.submit}>Enviar</Button>
			</FormBox>
		</Container>
	);
};
export default AddUser;
