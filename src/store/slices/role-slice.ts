import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { ArraySort } from '../utils/array-sorter';
import { makeRestaurantStub } from '../stubs/entities/restaurant-stub';
import { makeRoleStub } from '../stubs/entities/role-stub';
import { type Role } from '../../domain/entities/role';
import { type CreateRoleDto } from '../../domain/dto/role/createRole-dto';
import { type UpdateRoleDto } from '../../domain/dto/role/updateRole-dto';
import { makeRoleAdminRouterFactory } from '../../infra/api/factories/routers/role/roleAdminRouter-factory';

interface InitialState {
	value: Role[];
}

const initialState: InitialState = {
	value: [],
};

const roleSlice = createSlice({
	name: 'Role',
	initialState,
	reducers: {
		createRole(state, action: PayloadAction<CreateRoleDto>) {
			const router = makeRoleAdminRouterFactory();
			router
				.createRole(action.payload)
				.then(data => {
					const currentState = state.value;
					currentState.push(data.body);
					state.value = currentState;
				})
				.catch(error => console.log(error.message));

			const newState = state.value;
			newState.push({
				id: '',
				name: action.payload.name,
				restaurant: makeRestaurantStub(action.payload.restaurant),
				access: makeRoleStub().access,
				createdAt: '',
				updatedAt: '',
			});

			state.value = ArraySort.sort(newState, 'name');
		},

		deleteRole(state, action: PayloadAction<{ roleId: string }>) {
			const router = makeRoleAdminRouterFactory();
			router
				.deleteRole(action.payload.roleId)
				.then(data => {
					const currentState = state.value;
					currentState.push(data.body);
					state.value = currentState;
				})
				.catch(error => console.log(error.message));

			const newState = state.value.filter(
				category => category.id !== action.payload.roleId,
			);
			state.value = ArraySort.sort(newState, 'name');
		},

		updateRole(state, action: PayloadAction<UpdateRoleDto>) {
			const router = makeRoleAdminRouterFactory();
			router
				.updateRole(action.payload.id, action.payload)
				.then(data => {
					const currentState = state.value;
					currentState.push(data.body);
					state.value = currentState;
				})
				.catch(error => console.log(error.message));

			const index = state.value.findIndex(
				item => item.id === action.payload.id,
			);
			const foundEntity = state.value.find(
				item => item.id === action.payload.id,
			);
			const newState = state.value.splice(index, 1, {
				id: foundEntity?.id ?? '',
				name: foundEntity?.name ?? action.payload.name ?? '',
				restaurant:
					foundEntity?.restaurant ??
					makeRestaurantStub(action.payload.restaurant),
				access: foundEntity?.access ?? makeRoleStub().access,
				createdAt: foundEntity?.createdAt ?? '',
				updatedAt: foundEntity?.updatedAt ?? '',
			});
			state.value = ArraySort.sort(newState, 'name');
		},

		getRoles(state, action: PayloadAction<Role[]>) {
			state.value = action.payload;
		},
	},
});

export const { createRole, deleteRole, updateRole } = roleSlice.actions;
export default roleSlice.reducer;
