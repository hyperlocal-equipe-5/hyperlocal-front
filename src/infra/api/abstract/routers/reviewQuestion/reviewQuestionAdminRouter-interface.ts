import { type HttpResponse } from '../../../../../domain/dto/http/http-response';
import { type CreateReviewQuestionDto } from '../../../../../domain/dto/reviewQuestion/createReviewQuestion-dto';
import { type UpdateReviewQuestionDto } from '../../../../../domain/dto/reviewQuestion/updateReviewQuestion-dto';
import { type ReviewQuestion } from '../../../../../domain/entities/reviewQuestion';

export interface ReviewQuestionAdminRouterInterface {
	create: (
		createReviewQuestionDto: CreateReviewQuestionDto,
	) => Promise<HttpResponse<ReviewQuestion>>;
	delete: (reviewQuestionId: string) => Promise<HttpResponse<ReviewQuestion>>;
	update: (
		updateReviewQuestionDto: UpdateReviewQuestionDto,
	) => Promise<HttpResponse<ReviewQuestion>>;
}
