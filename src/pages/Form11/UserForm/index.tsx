import { useState, type FormEvent } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { type CreateUserDto } from '../../../domain/dto/user/createUser-dto';
import { makeUserAdminRouterFactory } from '../../../infra/api/factories/routers/user/userAdminRouter-factory';
import { type RootState } from '../../../store/store';
import Container from '../../../style/Container';
import styled from './styled.module.scss';

interface UserFormRequest {
	Name: string;
}

const UserForm = () => {
	const [userInfo, setUserInfo] = useState<CreateUserDto>({
		name: '',
		email: '',
		password: '',
		restaurant: '',
	});
	const navigate = useNavigate();
	const { id } = useParams();
	const roles = useSelector((state: RootState) => state.role.value);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		makeUserAdminRouterFactory()
			.createUser({
				...userInfo,
				restaurant: id || '',
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	const handleClick = (e: any) => {
		if (e.target.value === 'new') {
			navigate('/add/role');
		}
	};

	return (
		<Container>
			<div className={styled.box_form}>
				<form onSubmit={handleSubmit}>
					<label>Nome</label>
					<input
						id="name"
						name="name"
						type="text"
						placeholder="Digite seu nome."
						onChange={e => {
							setUserInfo({ ...userInfo, name: e.target.value });
						}}
						autoComplete="off"
						required
					/>

					<label>Email</label>
					<input
						id="name"
						name="name"
						type="text"
						placeholder="Digite seu nome."
						onChange={e => {
							setUserInfo({ ...userInfo, email: e.target.value });
						}}
						autoComplete="off"
						required
					/>

					<label>Senha</label>
					<input
						id="name"
						name="name"
						type="text"
						placeholder="Digite seu nome."
						onChange={e => {
							setUserInfo({ ...userInfo, password: e.target.value });
						}}
						autoComplete="off"
						required
					/>

					<label>Função</label>
					<select name="select" id="select" onClick={handleClick}>
						{roles.map((role, index) => (
							<option key={index} value={role.id}>
								{role.name}
							</option>
						))}
						<option value="new">Adicionar mais uma função</option>
					</select>

					<button type="submit">Cadastrar</button>
				</form>
			</div>
		</Container>
	);
};
export default UserForm;
