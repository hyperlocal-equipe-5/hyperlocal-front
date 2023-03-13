import { useState, type FormEvent } from 'react';

import { useNavigate } from 'react-router-dom';
import styled from './styled.module.scss';

interface UserFormRequest {
	Name: string;
}

const UserForm = () => {
	const [name, setName] = useState('');

	const navigate = useNavigate();

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	const handleClick = (e: any) => {
		if (e.target.value === 'new') {
			navigate('/add/role');
		}
	};

	return (
		<>
			<div className={styled.box_form}>
				<form onSubmit={handleSubmit}>
					<label>Nome</label>
					<input
						id="name"
						name="name"
						type="text"
						placeholder="Digite seu nome."
						onChange={e => {
							setName(e.target.value);
						}}
						autoComplete="off"
					/>

					<label>Função</label>
					<select name="select" id="select" onClick={handleClick}>
						<option value=""></option>
						<option value="new">Adicionar mais uma função</option>
					</select>

					<button type="submit">Cadastrar</button>
				</form>
			</div>
		</>
	);
};
export default UserForm;
