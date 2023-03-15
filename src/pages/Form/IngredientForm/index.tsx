import { type FormEvent, useState } from 'react';

import styled from './styled.module.scss';

const IngredientForm = () => {
	const [name, setName] = useState('');

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<div className={styled.container}>
			<div className={styled.box_form}>
				<form onSubmit={handleSubmit}>
					<label>Nome do Ingrediente</label>
					<input
						id="name"
						name="name"
						type="text"
						placeholder="Digite o nome do ingrediente."
						onChange={e => {
							setName(e.target.value);
						}}
						autoComplete="off"
					/>

					<label>Restaurante</label>
					<select name="select" id="select">
						<option value=""></option>
						<option value="">Restaurante 1</option>
						<option value="">Restaurante 2</option>
					</select>
					<button type="submit">Cadastrar</button>
				</form>
			</div>
		</div>
	);
};

export default IngredientForm;
