import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type CreateRestaurantDto } from '../../domain/dto/restaurant/createRestaurant-dto';
import { type UpdateRestaurantDto } from '../../domain/dto/restaurant/updateRestaurant-dto';
import { type Restaurant } from '../../domain/entities/restaurant';
import { makeRestaurantAdminRouterFactory } from '../../infra/api/factories/routers/restaurant/restaurantAdminRouter-factory';
import { makeRestaurantRouterFactory } from '../../infra/api/factories/routers/restaurant/restaurantRouter-factory';
import { ArraySort } from '../utils/array-sorter';

interface InitialState {
	value: Restaurant[];
}

const initialState: InitialState = {
	value: [],
};

const restaurantSlice = createSlice({
	name: 'Restaurant',
	initialState,
	reducers: {
		createRestaurant(state, action: PayloadAction<CreateRestaurantDto>) {
			const router = makeRestaurantAdminRouterFactory();
			router
				.createRestaurant(action.payload)
				.then(data => {
					const currentState = state.value;
					currentState.push(data.body);
					state.value = currentState;
				})
				.catch(error => console.log(error.message));

			const newState = state.value;
			newState.push({
				id: '',
				telephone: action.payload.telephone ?? 0,
				email: action.payload.email ?? '',
				name: action.payload.name ?? '',
				address: action.payload.address ?? '',
				logo: action.payload.logo ?? '',
				colorScheme: action.payload.colorScheme ?? 1,
				createdAt: '',
				updatedAt: '',
			});

			state.value = ArraySort.sort(newState, 'name');
		},

		deleteRestaurant(state, action: PayloadAction<string>) {
			const router = makeRestaurantAdminRouterFactory();
			router
				.deleteRestaurant(action.payload)
				.then(data => {
					const currentState = state.value;
					currentState.push(data.body);
					state.value = currentState;
				})
				.catch(error => console.log(error.message));

			const newState = state.value.filter(
				category => category.id !== action.payload,
			);
			state.value = ArraySort.sort(newState, 'name');
		},

		updateRestaurant(state, action: PayloadAction<UpdateRestaurantDto>) {
			const router = makeRestaurantAdminRouterFactory();
			router
				.updateRestaurant(action.payload.id, action.payload)
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
				telephone: action.payload.telephone ?? foundEntity?.telephone ?? 0,
				email: action.payload.email ?? foundEntity?.email ?? '',
				name: action.payload.name ?? foundEntity?.name ?? '',
				address: action.payload.address ?? foundEntity?.address ?? '',
				logo: action.payload.logo ?? foundEntity?.logo ?? '',
				colorScheme:
					action.payload.colorScheme ?? foundEntity?.colorScheme ?? 1,
				createdAt: foundEntity?.createdAt ?? '',
				updatedAt: foundEntity?.updatedAt ?? '',
			});
			state.value = ArraySort.sort(newState, 'name');
		},

		getRestaurats(state, action: PayloadAction<Restaurant[]>) {
			state.value = action.payload;
		},
	},
});

export const { createRestaurant, deleteRestaurant, updateRestaurant } =
	restaurantSlice.actions;
export default restaurantSlice.reducer;
