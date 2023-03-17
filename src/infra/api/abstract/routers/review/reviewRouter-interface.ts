import { type HttpResponse } from '../../../../../domain/dto/http/http-response';
import { type CreateReviewDto } from '../../../../../domain/dto/review/createReview-dto';
import { type Review } from '../../../../../domain/entities/review';

export interface ReviewRouterInterface {
	postReview: (body: CreateReviewDto) => Promise<HttpResponse<Review>>;
}
