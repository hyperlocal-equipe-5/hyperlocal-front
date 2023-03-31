import { useState, type FormEvent } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../../components/Header';
import { makeRoleAdminRouterFactory } from '../../../infra/api/factories/routers/role/roleAdminRouter-factory';
import Container from '../../../style/Container';
import styled from './styled.module.scss';

const RoleForm = () => {
	const [funcao, setFuncao] = useState<any>({
		name: '',
		restaurant: '',
		access: {},
	});

	const accesses = [
		'createRestaurants',
		'createUsers',
		'createProducts',
		'createCategories',
		'createIngredients',
		'createOrders',
		'createRoles',
		'createTables',
		'readRestaurants',
		'readUsers',
		'readProducts',
		'readCategories',
		'readIngredients',
		'readOrders',
		'readRoles',
		'readTables',
		'updateRestaurants',
		'updateUsers',
		'updateProducts',
		'updateCategories',
		'updateIngredients',
		'updateOrders',
		'updateRoles',
		'updateTables',
		'deleteRestaurants',
		'deleteUsers',
		'deleteProducts',
		'deleteCategories',
		'deleteIngredients',
		'deleteOrders',
		'deleteRoles',
		'deleteTables',
		'defineAccess',
	];

	const getAccessType = (access: string) => {
		const accessName = access.toString().toLowerCase();

		if (accessName.includes('create')) {
			return 'Criar';
		}

		if (accessName.includes('update')) {
			return 'Editar';
		}

		if (accessName.includes('delete')) {
			return 'Deletar';
		}

		if (accessName.includes('read')) {
			return 'Ver';
		}

		if (accessName.includes('define')) {
			return 'Definir';
		}
	};

	const getCheckBoxes = (title: string, field: string) => {
		const accessFields = accesses.filter(accessName =>
			accessName.toString().toLowerCase().includes(field.toLowerCase()),
		);

		return (
			<div className={styled.box_permissions}>
				<h2>{title}:</h2>
				<div className={styled.checkbox}>
					{accessFields.map((element, index) => (
						<label key={index} className={styled.label}>
							<input
								type="checkbox"
								className={styled.box}
								onChange={event =>
									setFuncao({
										...funcao,
										access: {
											...funcao.access,
											[element]: event.target.checked,
										},
									})
								}
							/>
							{getAccessType(element)}
						</label>
					))}
				</div>
			</div>
		);
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(funcao);

		makeRoleAdminRouterFactory()
			.createRole({
				...funcao,
				restaurant: '',
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<Container>
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
							setFuncao({ ...funcao, name: e.target.value });
						}}
						autoComplete="off"
						required
					/>
					<h2 className={styled.titulo}>Permições:</h2>
					{getCheckBoxes('Restaurantes', 'restaurants')}
					{getCheckBoxes('Usuários', 'users')}
					{getCheckBoxes('Categorias', 'categories')}
					{getCheckBoxes('Produtos', 'products')}
					{getCheckBoxes('Ingredientes', 'ingredients')}
					{getCheckBoxes('Funções', 'roles')}
					{getCheckBoxes('Pedidos', 'orders')}
					{getCheckBoxes('Mesas', 'tables')}
					{getCheckBoxes('Definir acessos', 'access')}
					<button type="submit">Cadastrar</button>
				</form>
			</div>
		</Container>
	);
};

export default RoleForm;
