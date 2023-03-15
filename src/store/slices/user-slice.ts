import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { ArraySort } from '../utils/array-sorter';
import { makeRestaurantStub } from '../stubs/entities/restaurant-stub';
import { makeRoleStub } from '../stubs/entities/role-stub';
import { type User } from '../../domain/entities/user';
import { type CreateUserDto } from '../../domain/dto/user/createUser-dto';
import { type UpdateUserDto } from '../../domain/dto/user/updateUser-dto';

interface InitialState {
	value: User[];
}

const initialState: InitialState = {
	value: [],
};

const userSlice = createSlice({
	name: 'User',
	initialState,
	reducers: {
		createUser(state, action: PayloadAction<CreateUserDto>) {
			const newState = state.value;
			newState.push({
				id: '',
				name: action.payload.name,
				email: action.payload.email,
				password: action.payload.password,
				role: makeRoleStub(),
				restaurant: makeRestaurantStub(action.payload.restaurant),
				createdAt: '',
				updatedAt: '',
			});
			state.value = ArraySort.sort(newState, 'name');
		},

		deleteUser(state, action: PayloadAction<string>) {
			const newState = state.value.filter(
				category => category.id !== action.payload,
			);
			state.value = ArraySort.sort(newState, 'name');
		},

		updateUser(state, action: PayloadAction<UpdateUserDto>) {
			const index = state.value.findIndex(
				item => item.id === action.payload.id,
			);
			const foundEntity = state.value.find(
				item => item.id === action.payload.id,
			);
			const newState = state.value.splice(index, 1, {
				id: foundEntity?.id ?? '',
				name: action.payload.name ?? foundEntity?.name ?? '',
				email: action.payload.email ?? foundEntity?.email ?? '',
				password: action.payload.password ?? foundEntity?.password ?? '',
				role: foundEntity?.role ?? makeRoleStub(),
				restaurant:
					foundEntity?.restaurant ??
					makeRestaurantStub(action.payload.restaurant),
				createdAt: foundEntity?.createdAt ?? '',
				updatedAt: foundEntity?.updatedAt ?? '',
			});
			state.value = ArraySort.sort(newState, 'name');
		},
	},
});

export const { createUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
