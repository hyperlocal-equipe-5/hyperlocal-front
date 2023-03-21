import { useState, type FormEvent } from 'react';
import Header from '../../../components/Header/Header';
import styled from './styled.module.scss';

const RoleForm = () => {
	const [funcao, setFuncao] = useState('');

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<>
			<Header />
			<div className={styled.box_form}>
				<form onSubmit={handleSubmit}>
					<label>Função</label>
					<input
						id="funcao"
						name="funcao"
						type="text"
						placeholder="Digite sua função."
						onChange={e => {
							setFuncao(e.target.value);
						}}
						autoComplete="off"
					/>

					<h2 className={styled.titulo}>Permições</h2>
					<button type="submit">Cadastrar</button>
				</form>
			</div>
		</>
	);
};

export default RoleForm;
