import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Form } from '../../components/form/Form';

import './Login.scss';

enum ButonType {
	submit = 'submit',
	reset = 'reset',
	button = 'button',
}

const Login: React.FC = () => {
	const navigate = useNavigate();
	const handleLogin = (body: any, buttonName: any) => {
		if (buttonName === 'Cadastrar') {
			navigate('/cadastro');
		}
	};
	return (
		<Form
			title={'Acessar sua Conta'}
			buttons={[
				{ type: ButonType.button, name: 'Login', color: 'green' },
				{ type: ButonType.button, name: 'Cadastrar', color: 'yellow' },
			]}
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
