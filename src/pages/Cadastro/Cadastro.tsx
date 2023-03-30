import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../../components/Form';
import { ImageInput } from '../../components/ImageInput/ImageInput';
import { type CreateUserDto } from '../../domain/dto/user/createUser-dto';
import { RestaurantIdHandler } from '../../helpers/handlers/restaurantId/restaurantIdHandler-helper';
import { makeUserRouterFactory } from '../../infra/api/factories/routers/user/userRouter-factory';
import Button from '../../style/Button';
import Container from '../../style/Container';
import FormBox from '../../style/Form';
import { ButtonType } from '../../types/ButtonTypes';
import { type InputDto } from '../../types/Dto/InputDto';
import { InputType } from '../../types/InputTypes';

const Cadastro = () => {
	const navigate = useNavigate();
	const inputs: InputDto = {
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
				required: true,
			},
			{
				name: 'Senha',
				typeInput: InputType.password,
				required: true,
			},
			{
				name: 'Celular',
				typeInput: InputType.tel,
				required: false,
			},
		],
		activeCheckbox: false,
		Checkbox: [],
	};
	const [createData, setCreateData] = useState<CreateUserDto>({
		name: '',
		email: '',
		password: '',
		cellphone: 0,
		image: '',
		restaurant: '',
	});

	const handleChange = (event: any, label: string) => {
		event.preventDefault();
		if (label === 'Nome') {
			setCreateData({ ...createData, name: event.target.value });
		}

		if (label === 'Email') {
			setCreateData({ ...createData, email: event.target.value });
		}

		if (label === 'Senha') {
			setCreateData({ ...createData, password: event.target.value });
		}

		if (label === 'Celular') {
			setCreateData({ ...createData, cellphone: event.target.value });
		}
	};

	const handleChangeImage = (convertedImage: string) => {
		setCreateData({ ...createData, image: convertedImage });
	};

	const handleSubmit = (event: any) => {
		event.preventDefault();

		makeUserRouterFactory()
			.createUser({
				...createData,
				restaurant: new RestaurantIdHandler().get(),
			})
			.then(response => {
				// navigate('/');
			})
			.catch(error => error);
	};

	return (
		<Container>
			<h1 className="text-textColor">Cadastro</h1>
			<FormBox OnSubmit={handleSubmit}>
				<Form Function={handleChange} Input={inputs} />
				<ImageInput onChange={handleChangeImage} />
				<Button type={ButtonType.submit}>Cadastrar</Button>
			</FormBox>
		</Container>
	);
};

export default Cadastro;
