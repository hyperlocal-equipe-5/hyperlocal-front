import { type HttpResponse } from '../../../../../domain/dto/http/http-response';
import { type Review } from '../../../../../domain/entities/review';

export interface ReviewAdminRouterInterface {
	getAllReviews: () => Promise<HttpResponse<Review[]>>;
	getOneReview: (reviewId: string) => Promise<HttpResponse<Review>>;
	deleteReview: (reviewId: string) => Promise<HttpResponse<Review>>;
}
