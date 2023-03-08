import { type PermissionsResponse } from './type';
import React from 'react';
import styled from './styled.module.scss';

interface PermissionsProps {
	permission: PermissionsResponse;
}
const Permissions = ({ permission }: PermissionsProps) => {
	return (
		<>
			<div className={styled.box_permissions}>
				<h2 className={styled.titulo}>Permições</h2>
				<div className={styled.permicoes}>
					<form>
						<h2>{permission.name}</h2>
						<label>{permission.ver}</label>
						<input type="checkbox" />
						<label>{permission.criar}</label>
						<input type="checkbox" />
						<label>{permission.editar}</label>
						<input type="checkbox" />
						<label>{permission.deletar}</label>
						<input type="checkbox" />
					</form>
				</div>
			</div>
		</>
	);
};

export default Permissions;
