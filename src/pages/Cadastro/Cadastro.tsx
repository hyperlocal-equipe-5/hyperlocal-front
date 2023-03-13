import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from '../../components/form/Form';
import './cadastro.scss';

enum ButonType {
	submit = 'submit',
	reset = 'reset',
	button = 'button',
}

const Cadastro: React.FC = () => {
	const navigate = useNavigate();
	const handleLogin = (body: any, buttonName: any) => {
		if (buttonName === 'Login') {
			navigate('/login');
		}
	};
	return (
		<>
			<div className="cadastro">
				<Form
					title={'Acessar sua Conta'}
					buttons={[
						{ type: ButonType.button, name: 'Cadastrar', color: 'yellow' },
						{ type: ButonType.button, name: 'Login', color: 'green' },
					]}
					fields={[
						{
							label: 'Nome',
							inputType: 'text',
							placeholder: 'Digite seu Nome',
						},
						{
							label: 'Celular',
							inputType: 'text',
							placeholder: 'Digite seu Contato',
						},
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
			</div>
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
