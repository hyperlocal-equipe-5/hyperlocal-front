import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface State {
	value: string[];
}

const initialState: State = {
	value: [],
};

const testProductsSlice = createSlice({
	name: 'testProducts',
	initialState,
	reducers: {
		addProduct(state, action: PayloadAction<string>) {
			const newState = state.value;
			newState.push(action.payload);
			state.value = newState;
		},
	},
});

export const { addProduct } = testProductsSlice.actions;
export default testProductsSlice.reducer;
