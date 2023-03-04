import React from 'react';
import { Link } from 'react-router-dom';

const Routes = () => {
	return (
		<div>
			<Link to="/">Login</Link>
			<Link to="/home">Home</Link>
			<Link to="/cadastro">Cadastro</Link>
			<Link to="/cadastrar">Cadastrar</Link>
		</div>
	);
};

export default Routes;
