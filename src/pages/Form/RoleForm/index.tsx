import { useState, type FormEvent } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import { type CreateRoleDto } from '../../../domain/dto/role/createRole-dto';
import { makeRoleAdminRouterFactory } from '../../../infra/api/factories/routers/role/roleAdminRouter-factory';
import styled from './styled.module.scss';

const RoleForm = () => {
	const { id } = useParams();
	const [funcao, setFuncao] = useState<CreateRoleDto>({
		name: '',
		restaurant: '',
		access: {
			createRestaurants: false,
			createUsers: false,
			createProducts: false,
			createCategories: false,
			createIngredients: false,
			createOrders: false,
			createRoles: false,
			createTables: false,
			readRestaurants: false,
			readUsers: false,
			readProducts: false,
			readCategories: false,
			readIngredients: false,
			readOrders: false,
			readRoles: false,
			readTables: false,
			updateRestaurants: false,
			updateUsers: false,
			updateProducts: false,
			updateCategories: false,
			updateIngredients: false,
			updateOrders: false,
			updateRoles: false,
			updateTables: false,
			deleteRestaurants: false,
			deleteUsers: false,
			deleteProducts: false,
			deleteCategories: false,
			deleteIngredients: false,
			deleteOrders: false,
			deleteRoles: false,
			deleteTables: false,
			defineAccess: false,
		},
	});

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		makeRoleAdminRouterFactory()
			.createRole({
				...funcao,
				restaurant: id || '',
			})
			.catch(function (error) {
				console.log(error);
			});
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
							setFuncao({ ...funcao, name: e.target.name });
						}}
						autoComplete="off"
						required
					/>

					<h2 className={styled.titulo}>Permições:</h2>

					<div className={styled.box_permissions}>
						<h2>Restaurantes:</h2>
						<div className={styled.checkbox}>
							<label className={styled.label}>
								<input
									type="checkbox"
									className={styled.box}
									onChange={event =>
										setFuncao({
											...funcao,
											access: {
												...funcao.access,
												readRestaurants: event.target.checked,
											},
										})
									}
								/>
								Ver
							</label>
							<label className={styled.label}>
								<input
									type="checkbox"
									className={styled.box}
									onChange={event =>
										setFuncao({
											...funcao,
											access: {
												...funcao.access,
												createRestaurants: event.target.checked,
											},
										})
									}
								/>
								Criar
							</label>
							<label className={styled.label}>
								<input
									type="checkbox"
									className={styled.box}
									onChange={event =>
										setFuncao({
											...funcao,
											access: {
												...funcao.access,
												updateRestaurants: event.target.checked,
											},
										})
									}
								/>
								Editar
							</label>
							<label className={styled.label}>
								<input
									type="checkbox"
									className={styled.box}
									onChange={event =>
										setFuncao({
											...funcao,
											access: {
												...funcao.access,
												deleteRestaurants: event.target.checked,
											},
										})
									}
								/>
								Deletar
							</label>
						</div>
					</div>

					<div className={styled.box_permissions}>
						<h2>Usuários:</h2>
						<div className={styled.checkbox}>
							<label className={styled.label}>
								<input
									type="checkbox"
									className={styled.box}
									onChange={event =>
										setFuncao({
											...funcao,
											access: {
												...funcao.access,
												readUsers: event.target.checked,
											},
										})
									}
								/>
								Ver
							</label>
							<label className={styled.label}>
								<input
									type="checkbox"
									className={styled.box}
									onChange={event =>
										setFuncao({
											...funcao,
											access: {
												...funcao.access,
												createUsers: event.target.checked,
											},
										})
									}
								/>
								Criar
							</label>
							<label className={styled.label}>
								<input
									type="checkbox"
									className={styled.box}
									onChange={event =>
										setFuncao({
											...funcao,
											access: {
												...funcao.access,
												updateUsers: event.target.checked,
											},
										})
									}
								/>
								Editar
							</label>
							<label className={styled.label}>
								<input
									type="checkbox"
									className={styled.box}
									onChange={event =>
										setFuncao({
											...funcao,
											access: {
												...funcao.access,
												deleteUsers: event.target.checked,
											},
										})
									}
								/>
								Deletar
							</label>
						</div>
					</div>

					<div className={styled.box_permissions}>
						<h2>Produtos:</h2>
						<div className={styled.checkbox}>
							<label className={styled.label}>
								<input
									type="checkbox"
									className={styled.box}
									onChange={event =>
										setFuncao({
											...funcao,
											access: {
												...funcao.access,
												readProducts: event.target.checked,
											},
										})
									}
								/>
								Ver
							</label>
							<label className={styled.label}>
								<input
									type="checkbox"
									className={styled.box}
									onChange={event =>
										setFuncao({
											...funcao,
											access: {
												...funcao.access,
												createProducts: event.target.checked,
											},
										})
									}
								/>
								Criar
							</label>
							<label className={styled.label}>
								<input
									type="checkbox"
									className={styled.box}
									onChange={event =>
										setFuncao({
											...funcao,
											access: {
												...funcao.access,
												updateProducts: event.target.checked,
											},
										})
									}
								/>
								Editar
							</label>
							<label className={styled.label}>
								<input
									type="checkbox"
									className={styled.box}
									onChange={event =>
										setFuncao({
											...funcao,
											access: {
												...funcao.access,
												deleteProducts: event.target.checked,
											},
										})
									}
								/>
								Deletar
							</label>
						</div>
					</div>

					<div className={styled.box_permissions}>
						<h2>Categorias:</h2>
						<div className={styled.checkbox}>
							<label className={styled.label}>
								<input
									type="checkbox"
									className={styled.box}
									onChange={event =>
										setFuncao({
											...funcao,
											access: {
												...funcao.access,
												readCategories: event.target.checked,
											},
										})
									}
								/>
								Ver
							</label>
							<label className={styled.label}>
								<input
									type="checkbox"
									className={styled.box}
									onChange={event =>
										setFuncao({
											...funcao,
											access: {
												...funcao.access,
												createCategories: event.target.checked,
											},
										})
									}
								/>
								Criar
							</label>
							<label className={styled.label}>
								<input
									type="checkbox"
									className={styled.box}
									onChange={event =>
										setFuncao({
											...funcao,
											access: {
												...funcao.access,
												updateCategories: event.target.checked,
											},
										})
									}
								/>
								Editar
							</label>
							<label className={styled.label}>
								<input
									type="checkbox"
									className={styled.box}
									onChange={event =>
										setFuncao({
											...funcao,
											access: {
												...funcao.access,
												deleteCategories: event.target.checked,
											},
										})
									}
								/>
								Deletar
							</label>
						</div>
					</div>

					<div className={styled.box_permissions}>
						<h2>Ingredients:</h2>
						<div className={styled.checkbox}>
							<label className={styled.label}>
								<input
									type="checkbox"
									className={styled.box}
									onChange={event =>
										setFuncao({
											...funcao,
											access: {
												...funcao.access,
												readIngredients: event.target.checked,
											},
										})
									}
								/>
								Ver
							</label>
							<label className={styled.label}>
								<input
									type="checkbox"
									className={styled.box}
									onChange={event =>
										setFuncao({
											...funcao,
											access: {
												...funcao.access,
												createIngredients: event.target.checked,
											},
										})
									}
								/>
								Criar
							</label>
							<label className={styled.label}>
								<input
									type="checkbox"
									className={styled.box}
									onChange={event =>
										setFuncao({
											...funcao,
											access: {
												...funcao.access,
												updateIngredients: event.target.checked,
											},
										})
									}
								/>
								Editar
							</label>
							<label className={styled.label}>
								<input
									type="checkbox"
									className={styled.box}
									onChange={event =>
										setFuncao({
											...funcao,
											access: {
												...funcao.access,
												deleteIngredients: event.target.checked,
											},
										})
									}
								/>
								Deletar
							</label>
						</div>
					</div>

					<div className={styled.box_permissions}>
						<h2>Ordens:</h2>
						<div className={styled.checkbox}>
							<label className={styled.label}>
								<input
									type="checkbox"
									className={styled.box}
									onChange={event =>
										setFuncao({
											...funcao,
											access: {
												...funcao.access,
												readOrders: event.target.checked,
											},
										})
									}
								/>
								Ver
							</label>
							<label className={styled.label}>
								<input
									type="checkbox"
									className={styled.box}
									onChange={event =>
										setFuncao({
											...funcao,
											access: {
												...funcao.access,
												createOrders: event.target.checked,
											},
										})
									}
								/>
								Criar
							</label>
							<label className={styled.label}>
								<input
									type="checkbox"
									className={styled.box}
									onChange={event =>
										setFuncao({
											...funcao,
											access: {
												...funcao.access,
												updateOrders: event.target.checked,
											},
										})
									}
								/>
								Editar
							</label>
							<label className={styled.label}>
								<input
									type="checkbox"
									className={styled.box}
									onChange={event =>
										setFuncao({
											...funcao,
											access: {
												...funcao.access,
												deleteOrders: event.target.checked,
											},
										})
									}
								/>
								Deletar
							</label>
						</div>
					</div>

					<div className={styled.box_permissions}>
						<h2>Funções:</h2>
						<div className={styled.checkbox}>
							<label className={styled.label}>
								<input
									type="checkbox"
									className={styled.box}
									onChange={event =>
										setFuncao({
											...funcao,
											access: {
												...funcao.access,
												readRoles: event.target.checked,
											},
										})
									}
								/>
								Ver
							</label>
							<label className={styled.label}>
								<input
									type="checkbox"
									className={styled.box}
									onChange={event =>
										setFuncao({
											...funcao,
											access: {
												...funcao.access,
												createRoles: event.target.checked,
											},
										})
									}
								/>
								Criar
							</label>
							<label className={styled.label}>
								<input
									type="checkbox"
									className={styled.box}
									onChange={event =>
										setFuncao({
											...funcao,
											access: {
												...funcao.access,
												updateRoles: event.target.checked,
											},
										})
									}
								/>
								Editar
							</label>
							<label className={styled.label}>
								<input
									type="checkbox"
									className={styled.box}
									onChange={event =>
										setFuncao({
											...funcao,
											access: {
												...funcao.access,
												deleteRoles: event.target.checked,
											},
										})
									}
								/>
								Deletar
							</label>
						</div>
					</div>

					<div className={styled.box_permissions}>
						<h2>Mesas:</h2>
						<div className={styled.checkbox}>
							<label className={styled.label}>
								<input
									type="checkbox"
									className={styled.box}
									onChange={event =>
										setFuncao({
											...funcao,
											access: {
												...funcao.access,
												readTables: event.target.checked,
											},
										})
									}
								/>
								Ver
							</label>
							<label className={styled.label}>
								<input
									type="checkbox"
									className={styled.box}
									onChange={event =>
										setFuncao({
											...funcao,
											access: {
												...funcao.access,
												createTables: event.target.checked,
											},
										})
									}
								/>
								Criar
							</label>
							<label className={styled.label}>
								<input
									type="checkbox"
									className={styled.box}
									onChange={event =>
										setFuncao({
											...funcao,
											access: {
												...funcao.access,
												updateTables: event.target.checked,
											},
										})
									}
								/>
								Editar
							</label>
							<label className={styled.label}>
								<input
									type="checkbox"
									className={styled.box}
									onChange={event =>
										setFuncao({
											...funcao,
											access: {
												...funcao.access,
												deleteTables: event.target.checked,
											},
										})
									}
								/>
								Deletar
							</label>
						</div>
					</div>

					<div className={styled.box_permissions}>
						<h2>Acessos:</h2>
						<div className={styled.checkbox}>
							<label className={styled.label}>
								<input
									type="checkbox"
									className={styled.box}
									onChange={event =>
										setFuncao({
											...funcao,
											access: {
												...funcao.access,
												defineAccess: event.target.checked,
											},
										})
									}
								/>
								Definir acessos
							</label>
						</div>
					</div>

					<button type="submit">Cadastrar</button>
				</form>
			</div>
		</>
	);
};

export default RoleForm;
