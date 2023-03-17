import { type HttpResponse } from '../../../../../domain/dto/http/http-response';
import { type Review } from '../../../../../domain/entities/review';

export interface ReviewAdminRouterInterface {
	getAllReviews: (restaurantId: string) => Promise<HttpResponse<Review[]>>;
	getOneReview: (
		reviewId: string,
		restaurantId: string,
	) => Promise<HttpResponse<Review>>;
	deleteReview: (
		reviewId: string,
		restaurantId: string,
	) => Promise<HttpResponse<Review>>;
}
