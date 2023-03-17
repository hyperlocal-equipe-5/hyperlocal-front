import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { ArraySort } from '../utils/array-sorter';
import { type Category } from '../../domain/entities/category';
import { makeRestaurantStub } from '../stubs/entities/restaurant-stub';
import { type CreateCategoryDto } from '../../domain/dto/category/createCategory-dto';
import { type UpdateCategoryDto } from '../../domain/dto/category/updateCategory-dto';
import { makeCategoryRouterFactory } from '../../infra/api/factories/routers/category/categoryRouter-factory';
import { makeCategoryAdminRouterFactory } from '../../infra/api/factories/routers/category/categoryAdminRouter-factory';

interface InitialState {
	value: Category[];
}

const initialState: InitialState = {
	value: [],
};

const categorySlice = createSlice({
	name: 'Category',
	initialState,
	reducers: {
		createCategory(state, action: PayloadAction<CreateCategoryDto>) {
			const router = makeCategoryAdminRouterFactory();
			router
				.createCategory(action.payload)
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
				createdAt: '',
				updatedAt: '',
				image: action.payload.image ?? '',
				products: [],
				restaurant: makeRestaurantStub(action.payload.restaurant),
				highlight: action.payload.highlight ?? false,
			});
			state.value = ArraySort.sort(newState, 'name');
		},

		deleteCategory(
			state,
			action: PayloadAction<{ categoryId: string; restaurantId: string }>,
		) {
			const router = makeCategoryAdminRouterFactory();
			router
				.deleteCategory(action.payload.categoryId, action.payload.restaurantId)
				.then(data => {
					const currentState = state.value;
					currentState.push(data.body);
					state.value = currentState;
				})
				.catch(error => console.log(error.message));

			const newState = state.value.filter(
				category => category.id !== action.payload.categoryId,
			);
			state.value = ArraySort.sort(newState, 'name');
		},

		updateCategory(state, action: PayloadAction<UpdateCategoryDto>) {
			const router = makeCategoryAdminRouterFactory();
			router
				.updateCategory(action.payload.id, action.payload)
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
				name: action.payload.name ?? foundEntity?.name ?? '',
				createdAt: foundEntity?.createdAt ?? '',
				updatedAt: foundEntity?.updatedAt ?? '',
				image: action.payload.image ?? foundEntity?.image ?? '',
				products: foundEntity?.products ?? [],
				restaurant:
					foundEntity?.restaurant ??
					makeRestaurantStub(action.payload.restaurant),
				highlight: action.payload.highlight ?? foundEntity?.highlight ?? false,
			});
			state.value = ArraySort.sort(newState, 'name');
		},

		getCategories(state, action: PayloadAction<string>) {
			const router = makeCategoryRouterFactory();
			router
				.getAllCategories(action.payload)
				.then(data => {
					state.value = data.body;
				})
				.catch(error => console.log(error.message));
		},
	},
});

export const { createCategory, deleteCategory, updateCategory } =
	categorySlice.actions;
export default categorySlice.reducer;