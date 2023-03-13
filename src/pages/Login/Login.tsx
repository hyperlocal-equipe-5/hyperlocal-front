import React from 'react';

import { Form } from '../../components/form/Form';

import './Login.scss';

enum ButonType {
	submit = 'submit',
	reset = 'reset',
	button = 'button',
}
const handleLogin = () => {
	console.log(handleLogin);
};

const Login: React.FC = () => {
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
