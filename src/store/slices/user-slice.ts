import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { makeRestaurantStub } from '../stubs/entities/restaurant-stub';
import { makeRoleStub } from '../stubs/entities/role-stub';
import { type User } from '../../domain/entities/user';
import { type CreateUserDto } from '../../domain/dto/user/createUser-dto';
import { type UpdateUserDto } from '../../domain/dto/user/updateUser-dto';
import { makeUserRouterFactory } from '../../infra/api/factories/routers/user/userRouter-factory';

interface InitialState {
	value: User;
}

const initialState: InitialState = {
	value: {
		id: '',
		name: '',
		email: '',
		password: '',
		role: makeRoleStub(),
		restaurant: makeRestaurantStub(),
		createdAt: '',
		updatedAt: '',
	},
};

const userSlice = createSlice({
	name: 'User',
	initialState,
	reducers: {
		createUser(state, action: PayloadAction<CreateUserDto>) {
			const userRouter = makeUserRouterFactory();
			userRouter
				.createUser(action.payload)
				.catch(error => console.log(error.message));

			state.value = {
				id: '',
				name: action.payload.name,
				email: action.payload.email,
				password: action.payload.password,
				role: makeRoleStub(),
				restaurant: makeRestaurantStub(action.payload.restaurant),
				createdAt: '',
				updatedAt: '',
			};
		},

		deleteUser(
			state,
			action: PayloadAction<{ userId: string; restaurantId: string }>,
		) {
			const userRouter = makeUserRouterFactory();
			userRouter
				.deleteUser(action.payload.userId, action.payload.restaurantId)
				.catch(error => console.log(error.message));

			state.value = {
				id: '',
				name: '',
				email: '',
				password: '',
				role: makeRoleStub(),
				restaurant: makeRestaurantStub(),
				createdAt: '',
				updatedAt: '',
			};
		},

		updateUser(state, action: PayloadAction<UpdateUserDto>) {
			const userRouter = makeUserRouterFactory();
			userRouter
				.updateUser(action.payload.id, action.payload)
				.catch(error => console.log(error.message));

			const foundEntity = state.value;
			state.value = {
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
			};
		},

		getUser(state, action: PayloadAction<User>) {
			state.value = action.payload;
		},
	},
});

export const { createUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
