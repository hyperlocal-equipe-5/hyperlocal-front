import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type CreateOrderDto } from '../../domain/dto/order/createOrder-dto';

const initialState: CreateOrderDto = {
	restaurant: '',
	finished: false,
	takeAway: false,
	products: [],
	customerName: '',
	table: '',
};

const customerOrderSlice = createSlice({
	name: 'CustomerOrder',
	initialState,
	reducers: {
		setRestaurantId(state, action: PayloadAction<string>) {
			state.restaurant = action.payload;
		},
		setFinishedStatus(state, action: PayloadAction<boolean>) {
			state.finished = action.payload;
		},
		setTakeAway(state, action: PayloadAction<boolean>) {
			state.takeAway = action.payload;
		},
		setCustomerName(state, action: PayloadAction<string>) {
			state.customerName = action.payload;
		},
		setTableId(state, action: PayloadAction<string>) {
			state.table = action.payload;
		},
		setProducts(
			state,
			action: PayloadAction<
				Array<{
					product: string;
					ingredientsAdded: Array<{
						ingredient: string;
						quantity: number;
					}>;
					ingredientsRemoved: Array<{
						ingredient: string;
						quantity: number;
					}>;
				}>
			>,
		) {
			state.products = action.payload;
		},
		addProduct(
			state,
			action: PayloadAction<{
				product: string;
				ingredientsAdded: Array<{
					ingredient: string;
					quantity: number;
				}>;
				ingredientsRemoved: Array<{
					ingredient: string;
					quantity: number;
				}>;
			}>,
		) {
			state.products = [...state.products, action.payload];
		},
	},
});

export const {
	setRestaurantId,
	setFinishedStatus,
	setTakeAway,
	setCustomerName,
	setTableId,
	setProducts,
	addProduct,
} = customerOrderSlice.actions;
export default customerOrderSlice.reducer;
