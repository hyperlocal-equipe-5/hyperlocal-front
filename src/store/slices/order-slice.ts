import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type CreateOrderDto } from '../../domain/dto/order/createOrder-dto';
import { type UpdateOrderDto } from '../../domain/dto/order/updateOrder-dto';
import { type Order } from '../../domain/entities/order';
import { makeOrderAdminRouterFactory } from '../../infra/api/factories/routers/order/orderRouterAdmin-factory';
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
			const router = makeOrderAdminRouterFactory();
			router
				.createOrder(action.payload)
				.then(data => {
					const currentState = state.value;
					currentState.push(data.body);
					state.value = currentState;
				})
				.catch(error => console.log(error.message));

			const newState = state.value;
			newState.push({
				id: '',
				takeAway: action.payload.takeAway ?? false,
				products: [],
				restaurant: makeRestaurantStub(action.payload.restaurant),
				orderNumber: 0,
				customerName: action.payload.customerName ?? '',
				createdAt: '',
				updatedAt: '',
				finished: false,
				price: 0,
			});

			state.value = newState;
		},

		deleteOrder(state, action: PayloadAction<{ orderId: string }>) {
			const router = makeOrderAdminRouterFactory();
			router
				.deleteOrder(action.payload.orderId)
				.then(data => {
					const currentState = state.value;
					currentState.push(data.body);
					state.value = currentState;
				})
				.catch(error => console.log(error.message));

			const newState = state.value.filter(
				category => category.id !== action.payload.orderId,
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
				restaurant:
					foundEntity?.restaurant ??
					makeRestaurantStub(action.payload.restaurant),
				orderNumber: 0,
				customerName:
					action.payload.customerName ?? foundEntity?.customerName ?? '',
				createdAt: foundEntity?.createdAt ?? '',
				updatedAt: foundEntity?.updatedAt ?? '',
				finished: false,
				price: 0,
			});
			state.value = newState;
		},

		getOrders(state, action: PayloadAction<Order[]>) {
			state.value = action.payload;
		},
	},
});

export const { createOrder, deleteOrder, updateOrder } = orderSlice.actions;
export default orderSlice.reducer;
