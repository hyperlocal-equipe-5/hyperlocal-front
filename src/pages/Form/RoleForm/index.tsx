import { type FormEvent, useState } from 'react';

import Header from '../../../components/Header/Header';
import Permissions from '../../../components/Permissions/Permissions';
import { permissions } from '../../../mocks/permissions';
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
					{permissions.map((permission: any) => (
						<Permissions key={permission.name} permission={permission} />
					))}
					<button type="submit">Cadastrar</button>
				</form>
			</div>
		</>
	);
};

export default RoleForm;
