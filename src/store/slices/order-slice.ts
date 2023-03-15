import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type CreateOrderDto } from '../../domain/dto/order/createOrder-dto';
import { type UpdateOrderDto } from '../../domain/dto/order/updateOrder-dto';
import { type Order } from '../../domain/entities/order';
import { makeOrderRouterFactory } from '../../infra/api/factories/routers/order/orderRouter-factory';
import { makeRestaurantStub } from '../stubs/entities/restaurant-stub';

interface InitialState {
	value: Order[];
}

const initialState: InitialState = {
	value: [],
};

const orderSlice = createSlice({
	name: 'Order',
	initialState,
	reducers: {
		createOrder(state, action: PayloadAction<CreateOrderDto>) {
			const router = makeOrderRouterFactory();
			router
				.createOrder(action.payload)
				.then(data => {
					const currentState = state.value;
					currentState.push(data);
					state.value = currentState;
				})
				.catch(error => {
					console.log(error);
				});

			const newState = state.value;
			newState.push({
				id: '',
				takeAway: action.payload.takeAway ?? false,
				products: [],
				quantities: action.payload.quantities,
				restaurant: makeRestaurantStub(action.payload.restaurant),
				orderNumber: action.payload.orderNumber ?? 0,
				customerName: action.payload.customerName ?? '',
				createdAt: '',
				updatedAt: '',
			});

			state.value = newState;
		},

		deleteOrder(state, action: PayloadAction<string>) {
			const newState = state.value.filter(
				category => category.id !== action.payload,
			);
			state.value = newState;
		},

		updateOrder(state, action: PayloadAction<UpdateOrderDto>) {
			const index = state.value.findIndex(
				item => item.id === action.payload.id,
			);
			const foundEntity = state.value.find(
				item => item.id === action.payload.id,
			);
			const newState = state.value.splice(index, 1, {
				id: foundEntity?.id ?? '',
				takeAway: action.payload.takeAway ?? foundEntity?.takeAway ?? false,
				products: foundEntity?.products ?? [],
				quantities: action.payload.quantities ?? foundEntity?.quantities ?? [],
				restaurant:
					foundEntity?.restaurant ??
					makeRestaurantStub(action.payload.restaurant),
				orderNumber:
					action.payload.orderNumber ?? foundEntity?.orderNumber ?? 0,
				customerName:
					action.payload.customerName ?? foundEntity?.customerName ?? '',
				createdAt: foundEntity?.createdAt ?? '',
				updatedAt: foundEntity?.updatedAt ?? '',
			});
			state.value = newState;
		},

		getOrders(state, action: PayloadAction<{ restaurant: string }>) {
			const router = makeOrderRouterFactory();
			router
				.getAllOrders(action.payload.restaurant)
				.then(data => {
					state.value = data.body;
				})
				.catch(error => console.log(error.message));
		},
	},
});

export const { createOrder, deleteOrder, updateOrder } = orderSlice.actions;
export default orderSlice.reducer;
