import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Form } from '../../components/form/Form';
import { makeAuthRouterFactory } from '../../infra/api/factories/routers/auth/authRouter-factory';

enum ButonType {
	submit = 'submit',
	reset = 'reset',
	button = 'button',
}

const Login: React.FC = () => {
	const navigate = useNavigate();
	const [error, setError] = useState('');
	const handleLogin = (body: any, buttonName: any) => {
		if (buttonName === 'Cadastrar') {
			navigate('/cadastro');
		}
		if (!body.Email || !body.Senha) {
			setError('Preencha todos os Campos');
			setTimeout(() => {
				setError('');
			}, 2000);
		}

		makeAuthRouterFactory()
			.login({
				email: body.Email,
				password: body.Senha,
			})
			.catch(function (error) {
				console.log(error);
			});
	};
	return (
		<Form
			title={'Acessar sua Conta'}
			buttons={[
				{ type: ButonType.button, name: 'Login', color: 'green' },
				{ type: ButonType.button, name: 'Cadastrar', color: 'yellow' },
			]}
			titleSecundary={error}
			fields={[
				{
					label: 'Email',
					inputType: 'text',
					placeholder: 'Digite seu email',
				},
				{
					label: 'Senha',
					inputType: 'password',
					placeholder: 'Digite sua Senha',
				},
			]}
			callbackFunction={handleLogin}
		/>
	);
};

export default Login;
