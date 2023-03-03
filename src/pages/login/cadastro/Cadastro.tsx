/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Cadastro() {
	const [email, setEmail] = useState('');
	const [emailConfirm, setEmailConfirm] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const navigate = useNavigate();
	
const handleCadastrar = () => {
	if (!email || !emailConfirm || !password) {
		// verifica se os campos tem informação
		setError('Prencha todos os campos');
		return;
	} else if (email !== emailConfirm) {
		setError('Os emails não são iguais');
		return;
	}

	
	alert('Usuario cadastrado com sucesso!');
	navigate('/');
};

	

	return (
		<div>
			<form className=" bg-red-700">
				<div>
					<label htmlFor="nome"> Cadastro de usuario</label>
                    <input 
                    type="text"
                    placeholder='Digite seu nome' />
					<input 
                    type="email" 
                    placeholder="Digite seu email" 
                    value={email}
                    // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
                    onChange={(e) => [setEmail(e.target.value), setError('')]}
                    />
					<input 
                    type="email" 
                    placeholder="Digite seu email" 
                    value={emailConfirm}
                    // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
                    onChange={(e) => [setEmailConfirm(e.target.value), setError('')]}
                    />
					<input 
                    type="password" 
                    placeholder="Digite sua senha" 
                    value={password}
                    // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
                    onChange={(e) => [setPassword(e.target.value), setError('')]}
                    
                    />
                    <label>{error}</label>
                    <button title='iscreva-se' onClick={handleCadastrar} >Increva-se</button>
                    <h5>Já tem conta? </h5>
                    <Link to="/">&nbsp; Entrar </Link>
				</div>
			</form>
		</div>
	);
};


export default Cadastro;
