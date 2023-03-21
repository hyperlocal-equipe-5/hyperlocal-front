import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type CreateReviewDto } from '../../domain/dto/review/createReview-dto';
import { type UpdateReviewDto } from '../../domain/dto/review/updateReview-dto';
import { type Review } from '../../domain/entities/review';
import { makeReviewAdminRouterFactory } from '../../infra/api/factories/routers/review/reviewAdminRouter-factory';
import { makeReviewRouterFactory } from '../../infra/api/factories/routers/review/reviewRouter-factory';
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
			const router = makeReviewRouterFactory();
			router
				.postReview(action.payload)
				.then(data => {
					const currentState = state.value;
					currentState.push(data.body);
					state.value = currentState;
				})
				.catch(error => {
					console.log(error);
				});

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

		deleteReview(state, action: PayloadAction<{ reviewId: string }>) {
			const router = makeReviewAdminRouterFactory();
			router
				.deleteReview(action.payload.reviewId)
				.then(data => {
					const currentState = state.value;
					currentState.push(data.body);
					state.value = currentState;
				})
				.catch(error => console.log(error.message));

			const newState = state.value.filter(
				category => category.id !== action.payload.reviewId,
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

		getReviews(state, action: PayloadAction<Review[]>) {
			state.value = action.payload;
		},
	},
});

export const { createReview, deleteReview, updateReview } = reviewSlice.actions;
export default reviewSlice.reducer;
