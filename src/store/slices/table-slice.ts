import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { ArraySort } from '../utils/array-sorter';
import { makeRestaurantStub } from '../stubs/entities/restaurant-stub';
import { type Table } from '../../domain/entities/table';
import { type CreateTableDto } from '../../domain/dto/table/createTable-dto';
import { type UpdateTableDto } from '../../domain/dto/table/updateTable-dto';
import { makeTableRouterFactory } from '../../infra/api/factories/routers/table/tableRouter-factory';
import { makeTableAdminRouterFactory } from '../../infra/api/factories/routers/table/tableAdminRouter-factory';

interface InitialState {
	value: Table[];
}

const teste: any = '';

const initialState: InitialState = {
	value: [
		{ id: '0', restaurant: teste, number: 0, createdAt: '', updatedAt: '' },
		{ id: '1', restaurant: teste, number: 1, createdAt: '', updatedAt: '' },
		{ id: '2', restaurant: teste, number: 2, createdAt: '', updatedAt: '' },
		{ id: '3', restaurant: teste, number: 3, createdAt: '', updatedAt: '' },
		{ id: '4', restaurant: teste, number: 4, createdAt: '', updatedAt: '' },
		{ id: '5', restaurant: teste, number: 5, createdAt: '', updatedAt: '' },
		{ id: '6', restaurant: teste, number: 6, createdAt: '', updatedAt: '' },
		{ id: '7', restaurant: teste, number: 77, createdAt: '', updatedAt: '' },
		{ id: '8', restaurant: teste, number: 888, createdAt: '', updatedAt: '' },
		{ id: '9', restaurant: teste, number: 9999, createdAt: '', updatedAt: '' },
	],
};

const tableSlice = createSlice({
	name: 'Table',
	initialState,
	reducers: {
		createTable(state, action: PayloadAction<CreateTableDto>) {
			const router = makeTableAdminRouterFactory();
			router
				.createTable(action.payload)
				.then(data => {
					const currentState = state.value;
					currentState.push(data.body);
					state.value = currentState;
				})
				.catch(error => console.log(error.message));

			const newState = state.value;
			newState.push({
				id: '',
				number: action.payload.number,
				restaurant: makeRestaurantStub(action.payload.restaurant),
				createdAt: '',
				updatedAt: '',
			});
			state.value = ArraySort.sort(newState, 'number');
		},

		deleteTable(state, action: PayloadAction<{ tableId: string }>) {
			const router = makeTableAdminRouterFactory();
			router
				.deleteTable(action.payload.tableId)
				.then(data => {
					const currentState = state.value;
					currentState.push(data.body);
					state.value = currentState;
				})
				.catch(error => console.log(error.message));

			const newState = state.value.filter(
				category => category.id !== action.payload.tableId,
			);
			state.value = ArraySort.sort(newState, 'number');
		},

		updateTable(state, action: PayloadAction<UpdateTableDto>) {
			const router = makeTableAdminRouterFactory();
			router
				.updateTable(action.payload.id, action.payload)
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
				number: action.payload.number ?? foundEntity?.number ?? 0,
				restaurant:
					foundEntity?.restaurant ??
					makeRestaurantStub(action.payload.restaurant),
				createdAt: foundEntity?.createdAt ?? '',
				updatedAt: foundEntity?.updatedAt ?? '',
			});
			state.value = ArraySort.sort(newState, 'number');
		},

		getTables(state, action: PayloadAction<Table[]>) {
			state.value = action.payload;
		},
	},
});

export const { createTable, deleteTable, updateTable, getTables } =
	tableSlice.actions;
export default tableSlice.reducer;
