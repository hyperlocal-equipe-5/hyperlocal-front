import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type CreateReviewDto } from '../../domain/dto/review/createReview-dto';
import { type UpdateReviewDto } from '../../domain/dto/review/updateReview-dto';
import { type Review } from '../../domain/entities/review';
import { makeRestaurantStub } from '../stubs/entities/restaurant-stub';

interface InitialState {
	value: Review[];
}

const initialState: InitialState = {
	value: [],
};

const reviewSlice = createSlice({
	name: 'Review',
	initialState,
	reducers: {
		createReview(state, action: PayloadAction<CreateReviewDto>) {
			const newState = state.value;
			newState.push({
				id: '',
				stars: action.payload.stars,
				comment: action.payload.comment ?? '',
				restaurant: makeRestaurantStub(action.payload.restaurant),
				createdAt: '',
				updatedAt: '',
			});
			state.value = newState;
		},

		deleteReview(state, action: PayloadAction<string>) {
			const newState = state.value.filter(
				category => category.id !== action.payload,
			);
			state.value = newState;
		},

		updateReview(state, action: PayloadAction<UpdateReviewDto>) {
			const index = state.value.findIndex(
				item => item.id === action.payload.id,
			);
			const foundEntity = state.value.find(
				item => item.id === action.payload.id,
			);
			const newState = state.value.splice(index, 1, {
				id: foundEntity?.id ?? '',
				stars: action.payload.stars ?? foundEntity?.stars ?? 0,
				comment: action.payload.comment ?? foundEntity?.comment ?? '',
				restaurant:
					foundEntity?.restaurant ??
					makeRestaurantStub(action.payload.restaurant),
				createdAt: foundEntity?.createdAt ?? '',
				updatedAt: foundEntity?.updatedAt ?? '',
			});
			state.value = newState;
		},
	},
});

export const { createReview, deleteReview, updateReview } = reviewSlice.actions;
export default reviewSlice.reducer;
