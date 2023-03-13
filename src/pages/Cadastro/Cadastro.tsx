import React, { useCallback, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './cadastro.scss';

const Cadastro: React.FC = () => {
	const [email, setEmail] = useState('');
	const [nome, setNome] = useState('');
	const [password, setPassword] = useState('');
	const [restaurante, setRestaurante] = useState('');
	const [imagem, setImagem] = useState('');
	const [error, setError] = useState('');
	const navigate = useNavigate();
	const handleCadastrar = () => {
		if (!email || !password) {
			// verifica se os campos tem informação
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

	return (
		<>
			<form>
				<div className="cadastro" onSubmit={handleSublimit}>
					<div className="input">
						<div className="card">
							<h1>Cadastro de usuarios</h1>
							<input
								type="nome"
								placeholder=" Digite seu nome"
								value={nome}
								onChange={e => {
									setNome(e.target.value);
								}}
							/>
							<input
								type="email"
								placeholder=" Digite seu email"
								value={email}
								onChange={e => {
									setEmail(e.target.value);
								}}
							/>
							<input
								type="password"
								placeholder=" Digite sua Senha"
								value={password}
								onChange={e => {
									setPassword(e.target.value);
								}}
							/>
							<input
								type="text"
								placeholder="Digite o nome do Restaurante"
								value={restaurante}
								onChange={e => {
									setRestaurante(e.target.value);
								}}
							/>
							<input
								type="text"
								placeholder="Insira uma imagem"
								value={imagem}
								onChange={e => {
									setImagem(e.target.value);
								}}
							/>
							<div>{error}</div>
							<div className="entrar">
								<button type="submit" onClick={handleCadastrar}>
									Cadastrar
								</button>

								<h6>Já tem conta?</h6>
								<div className="conta">
									<Link to="/"> Entrar</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</form>
		</>
	);
};

export default Cadastro;
