import { type FormEvent, useState } from 'react';

import { ImQrcode } from 'react-icons/Im';
import styled from './styled.module.scss';

const TableForm = () => {
	const [mesa, setMesa] = useState('');

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<div className={styled.box_form}>
			<form onSubmit={handleSubmit}>
				<label>Número da mesa</label>
				<input
					id="mesa"
					name="mesa"
					type="text"
					placeholder="Digite número da mesa."
					onChange={e => {
						setMesa(e.target.value);
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
				<button type="submit" className={styled.qrcode}>
					<ImQrcode size={40} />
				</button>
				<span>Gerar QR-Code</span>
			</form>
		</div>
	);
};

export default TableForm;
