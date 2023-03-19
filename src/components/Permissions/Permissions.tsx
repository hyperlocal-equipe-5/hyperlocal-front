import styled from './styled.module.scss';

interface PermissionsResponse {
	name: string;
	read: string;
	create: string;
	edit: string;
	exclude: string;
}

const Permissions = ({
	name,
	create,
	read,
	edit,
	exclude,
}: PermissionsResponse) => {
	return (
		<>
			<div className={styled.box_permissions}>
				<h2>{name}</h2>
				<div className={styled.checkbox}>
					<label className={styled.label}>
						<input type="checkbox" className={styled.box} />
						{read}
					</label>
					<label className={styled.label}>
						<input type="checkbox" className={styled.box} />
						{create}
					</label>
					<label className={styled.label}>
						<input type="checkbox" className={styled.box} />
						{edit}
					</label>
					<label className={styled.label}>
						<input type="checkbox" className={styled.box} />
						{exclude}
					</label>
				</div>
			</div>
		</>
	);
};

export default Permissions;
