import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Form } from '../../components/form/Form';
import { makeUserRouterFactory } from '../../infra/api/factories/routers/user/userRouter-factory';

enum ButonType {
	submit = 'submit',
	reset = 'reset',
	button = 'button',
}

const Cadastro: React.FC = () => {
	const navigate = useNavigate();
	const [error, setError] = useState('');
	const { id } = useParams();

	const handleLogin = (body: any, buttonName: any) => {
		if (buttonName === 'Login') {
			navigate('/login');
		}
		if (!body.Email || !body.Senha || !body.Nome || !body.Celular) {
			setError('Preencha todos os Campos');
			setTimeout(() => {
				setError('');
			}, 2000);
		}

		makeUserRouterFactory()
			.createUser({
				name: body.Nome,
				email: body.Email,
				password: body.Senha,
				cellphone: body.Celular,
				restaurant: id || '',
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<>
			<Form
				title={'Cadastre um novo Usuario'}
				buttons={[
					{ type: ButonType.button, name: 'Cadastrar', color: 'yellow' },
					{ type: ButonType.button, name: 'Login', color: 'green' },
				]}
				titleSecundary={error}
				fields={[
					{
						label: 'Nome',
						inputType: 'text',
						placeholder: 'Digite seu Nome',
					},
					{
						label: 'Celular',
						inputType: 'number',
						placeholder: 'Digite seu Contato',
					},
					{
						label: 'Email',
						inputType: 'email',
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
		</>
	);
};

export default Cadastro;

/*
const [email, setEmail] = useState('');
	const [nome, setNome] = useState('');
	const [password, setPassword] = useState('');
	const [restaurante, setRestaurante] = useState('');
	const [imagem, setImagem] = useState('');
	const [error, setError] = useState('');
	const navigate = useNavigate();
	const handleCadastrar = () => {
		if (!email || !password) {
			setError('Prencha todos os campos');
			return;
		}

		alert('Usuario cadastrado com sucesso!');
		navigate('/');
	};
	const handleSublimit = useCallback(
		(e: any) => {
			e.preventDefault();
			console.log(email, password);
		},
		[email, password],
	);
	*/
