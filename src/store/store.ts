import { configureStore } from '@reduxjs/toolkit';
import testProductSlice from './slices/testProduct.slice';

export const store = configureStore({
	reducer: {
		testProducts: testProductSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
