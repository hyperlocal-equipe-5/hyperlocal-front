import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../../components/Form';
import { type LoginDto } from '../../domain/dto/login/login-dto';
import { RestaurantIdHandler } from '../../helpers/handlers/restaurantId/restaurantIdHandler-helper';
import { makeAuthRouterFactory } from '../../infra/api/factories/routers/auth/authRouter-factory';
import Button from '../../style/Button';
import Container from '../../style/Container';
import FormBox from '../../style/Form';
import { ButtonType } from '../../types/ButtonTypes';
import { type InputDto } from '../../types/Dto/InputDto';
import { InputType } from '../../types/InputTypes';

const Login = () => {
	const navigate = useNavigate();
	const inputs: InputDto = {
		activeInputText: true,
		Input: [
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
		],
		activeCheckbox: false,
		Checkbox: [],
	};

	const [loginData, setLoginData] = useState<LoginDto>({
		email: '',
		password: '',
	});

	const handleChange = (event: any, field: string) => {
		event.preventDefault();

		if (field === 'Email') {
			setLoginData({ ...loginData, email: event.target.value });
		}

		if (field === 'Senha') {
			setLoginData({ ...loginData, password: event.target.value });
		}
	};

	const handleSubmit = (event: any) => {
		event.preventDefault();

		makeAuthRouterFactory()
			.login(loginData)
			.then(response => {
				const restaurantId = new RestaurantIdHandler().get();
				navigate(`/`);
			})
			.catch(error => error);
	};

	return (
		<Container styleInline="">
			<div className="flex h-screen items-center justify-center overflow-y-hidden">
				<FormBox OnSubmit={handleSubmit}>
					<Form Function={handleChange} Input={inputs} />
					<Button type={ButtonType.submit}>login</Button>
				</FormBox>
			</div>
		</Container>
	);
};

export default Login;
