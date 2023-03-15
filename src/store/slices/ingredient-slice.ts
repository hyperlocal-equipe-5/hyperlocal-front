import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { ArraySort } from '../utils/array-sorter';
import { makeRestaurantStub } from '../stubs/entities/restaurant-stub';
import { type Ingredient } from '../../domain/entities/ingredient';
import { type CreateIngredientDto } from '../../domain/dto/ingredient/createIngredient-dto';
import { type UpdateIngredientDto } from '../../domain/dto/ingredient/updateIngredient-dto';
import { makeIngredientRouterFactory } from '../../infra/api/factories/routers/ingredient/ingredientRouter-factory';

interface InitialState {
	value: Ingredient[];
}

const initialState: InitialState = {
	value: [],
};

const ingredientSlice = createSlice({
	name: 'Ingredient',
	initialState,
	reducers: {
		createIngredient(state, action: PayloadAction<CreateIngredientDto>) {
			const newState = state.value;
			newState.push({
				id: '',
				name: action.payload.name,
				price: action.payload.price ?? 0,
				image: action.payload.image ?? '',
				restaurant: makeRestaurantStub(action.payload.restaurant),
				quantity: action.payload.quantity ?? 0,
				createdAt: '',
				updatedAt: '',
			});

			state.value = ArraySort.sort(newState, 'name');
		},

		deleteIngredient(state, action: PayloadAction<string>) {
			const newState = state.value.filter(
				category => category.id !== action.payload,
			);
			state.value = ArraySort.sort(newState, 'name');
		},

		updateIngredient(state, action: PayloadAction<UpdateIngredientDto>) {
			const index = state.value.findIndex(
				item => item.id === action.payload.id,
			);
			const foundEntity = state.value.find(
				item => item.id === action.payload.id,
			);
			const newState = state.value.splice(index, 1, {
				id: foundEntity?.id ?? '',
				name: action.payload.name ?? foundEntity?.name ?? '',
				price: action.payload.price ?? foundEntity?.price ?? 0,
				image: action.payload.image ?? foundEntity?.image ?? '',
				restaurant:
					foundEntity?.restaurant ??
					makeRestaurantStub(action.payload.restaurant),
				quantity: action.payload.quantity ?? foundEntity?.quantity ?? 0,
				createdAt: foundEntity?.createdAt ?? '',
				updatedAt: foundEntity?.updatedAt ?? '',
			});
			state.value = ArraySort.sort(newState, 'name');
		},

		getIngredients(state, action: PayloadAction<{ restaurant: string }>) {
			const router = makeIngredientRouterFactory();
			router
				.getAllIngredients(action.payload.restaurant)
				.then(data => {
					state.value = data.body;
				})
				.catch(error => console.log(error.message));
		},
	},
});

export const { createIngredient, deleteIngredient, updateIngredient } =
	ingredientSlice.actions;
export default ingredientSlice.reducer;
