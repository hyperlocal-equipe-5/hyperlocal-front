import { type FormEvent, useState } from 'react';

import styled from './styled.module.scss';

interface UserFormRequest {
	Name: string;
}

const UserForm = () => {
	const [name, setName] = useState('');

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
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
					<select name="select" id="select">
						<option value="select"></option>
						<option value="select">Adicionar mais uma função</option>
					</select>

					<button type="submit">Cadastrar</button>
				</form>
			</div>
		</>
	);
};
export default UserForm;
