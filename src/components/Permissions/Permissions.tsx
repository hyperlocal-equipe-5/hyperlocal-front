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
				<h2>{permission.name}</h2>
				<div className={styled.checkbox}>
					<label className={styled.label}>
						<input type="checkbox" className={styled.box} />
						{permission.ver}
					</label>
					<label className={styled.label}>
						<input type="checkbox" className={styled.box} />
						{permission.criar}
					</label>
					<label className={styled.label}>
						<input type="checkbox" className={styled.box} />
						{permission.editar}
					</label>
					<label className={styled.label}>
						<input type="checkbox" className={styled.box} />
						{permission.deletar}
					</label>
				</div>
			</div>
		</>
	);
};

export default Permissions;
