import { type HttpResponse } from '../../../../../domain/dto/http/http-response';
import { type ReviewQuestion } from '../../../../../domain/entities/reviewQuestion';

export interface ReviewQuestionRouterInterface {
	getAll: () => Promise<HttpResponse<ReviewQuestion[]>>;
	getOne: (reviewQuestionId: string) => Promise<HttpResponse<ReviewQuestion>>;
}
