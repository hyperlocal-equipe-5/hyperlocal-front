import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const navigate = useNavigate();
	const handleLogin = () => {
		if (!email || !password) {
			setError('preencha todos os campos');
		} else {
			navigate('/home');
		}
	};
	return (
		<body className=" m-0 bg-gray-600 ">
			<form className=" bg-red-700">
				<div>
					<label htmlFor="nome"> Entrar</label>

					<input
						type="email"
						placeholder="Digite seu email"
						value={email}
						onChange={e => {
							setEmail(e.target.value);
						}}
					/>

					<input
						type="password"
						placeholder="Digite sua senha"
						value={password}
						onChange={e => {
							setPassword(e.target.value);
						}}
					/>
					<label>{error}</label>
					<button title="Entrar" onClick={handleLogin}>
						Entrar
					</button>
					<h5>Ainda não tem conta? </h5>
					<Link to="/cadastro">&nbsp; Cadastrar </Link>
				</div>
			</form>
		</body>
	);
}

export default Login;
