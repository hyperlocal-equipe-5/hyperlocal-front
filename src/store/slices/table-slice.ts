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

const initialState: InitialState = {
	value: [],
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

		deleteTable(
			state,
			action: PayloadAction<{ tableId: string; restaurantId: string }>,
		) {
			const router = makeTableAdminRouterFactory();
			router
				.deleteTable(action.payload.tableId, action.payload.restaurantId)
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

		getTables(state, action: PayloadAction<{ restaurant: string }>) {
			const router = makeTableRouterFactory();
			router
				.getAllTables(action.payload.restaurant)
				.then(data => {
					state.value = data.body;
				})
				.catch(error => console.log(error.message));
		},
	},
});

export const { createTable, deleteTable, updateTable } = tableSlice.actions;
export default tableSlice.reducer;
