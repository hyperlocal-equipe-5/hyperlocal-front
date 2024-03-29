import { configureStore } from '@reduxjs/toolkit';
import categorySlice from './slices/category-slice';
import ingredientSlice from './slices/ingredient-slice';
import orderSlice from './slices/order-slice';
import productSlice from './slices/product-slice';
import restaurantSlice from './slices/restaurant-slice';
import reviewSlice from './slices/review-slice';
import roleSlice from './slices/role-slice';
import tableSlice from './slices/table-slice';
import userSlice from './slices/user-slice';
import customerOrderSlice from './slices/customerOrderSlice';

export const store = configureStore({
	reducer: {
		category: categorySlice,
		ingredient: ingredientSlice,
		order: orderSlice,
		product: productSlice,
		restaurant: restaurantSlice,
		review: reviewSlice,
		role: roleSlice,
		table: tableSlice,
		user: userSlice,
		customerOrder: customerOrderSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
