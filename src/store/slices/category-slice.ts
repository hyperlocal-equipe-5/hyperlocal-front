import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type CreateCategoryDto } from '../../domain/dto/category/createCategory-dto';
import { type UpdateCategoryDto } from '../../domain/dto/category/updateCategory-dto';
import { type Category } from '../../domain/entities/category';
import { makeCategoryAdminRouterFactory } from '../../infra/api/factories/routers/category/categoryAdminRouter-factory';
import { makeRestaurantStub } from '../stubs/entities/restaurant-stub';
import { ArraySort } from '../utils/array-sorter';

interface InitialState {
	value: Category[];
}

const teste: any = '';

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

		deleteCategory(state, action: PayloadAction<{ categoryId: string }>) {
			const router = makeCategoryAdminRouterFactory();
			router
				.deleteCategory(action.payload.categoryId)
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

		getCategories(state, action: PayloadAction<Category[]>) {
			state.value = action.payload;
		},
	},
});

export const { createCategory, deleteCategory, updateCategory, getCategories } =
	categorySlice.actions;
export default categorySlice.reducer;
