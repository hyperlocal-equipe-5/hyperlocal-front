import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type CreateProductDto } from '../../domain/dto/product/createProduct-dto';
import { type UpdateProductDto } from '../../domain/dto/product/updateProduct-dto';
import { type Product } from '../../domain/entities/product';
import { makeProductAdminRouterFactory } from '../../infra/api/factories/routers/product/productAdminRouter-factory';
import { makeCategoryStub } from '../stubs/entities/category-stub';
import { makeRestaurantStub } from '../stubs/entities/restaurant-stub';
import { ArraySort } from '../utils/array-sorter';

interface InitialState {
	value: Product[];
}
const teste: any = '';

const initialState: InitialState = {
	value: [],
};

const productSlice = createSlice({
	name: 'Product',
	initialState,
	reducers: {
		createProduct(state, action: PayloadAction<CreateProductDto>) {
			const router = makeProductAdminRouterFactory();
			router
				.createProduct(action.payload)
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
				price: action.payload.price ?? 0,
				description: action.payload.description ?? '',
				highlight: action.payload.highlight ?? false,
				image: action.payload.image ?? '',
				ingredients: [],
				category: makeCategoryStub(),
				restaurant: makeRestaurantStub(action.payload.restaurant),
				createdAt: '',
				updatedAt: '',
			});

			state.value = ArraySort.sort(newState, 'name');
		},

		deleteProduct(state, action: PayloadAction<{ productId: string }>) {
			const router = makeProductAdminRouterFactory();
			router
				.deleteProduct(action.payload.productId)
				.then(data => {
					const currentState = state.value;
					currentState.push(data.body);
					state.value = currentState;
				})
				.catch(error => console.log(error.message));

			const newState = state.value.filter(
				category => category.id !== action.payload.productId,
			);
			state.value = ArraySort.sort(newState, 'name');
		},

		updateProduct(state, action: PayloadAction<UpdateProductDto>) {
			const router = makeProductAdminRouterFactory();
			router
				.updateProduct(action.payload.id, action.payload)
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
				name: action.payload.name,
				price: action.payload.price ?? foundEntity?.price ?? 0,
				description:
					action.payload.description ?? foundEntity?.description ?? '',
				highlight: action.payload.highlight ?? foundEntity?.highlight ?? false,
				image: action.payload.image ?? foundEntity?.image ?? '',
				ingredients: foundEntity?.ingredients ?? [],
				category: foundEntity?.category ?? makeCategoryStub(),
				restaurant:
					foundEntity?.restaurant ??
					makeRestaurantStub(action.payload.restaurant),
				createdAt: foundEntity?.createdAt ?? '',
				updatedAt: foundEntity?.updatedAt ?? '',
			});
			state.value = ArraySort.sort(newState, 'name');
		},

		getProducts(state, action: PayloadAction<Product[]>) {
			// state.value = action.payload;
		},
	},
});

export const { createProduct, deleteProduct, updateProduct } =
	productSlice.actions;
export default productSlice.reducer;
