import { HttpRequestAdapter } from '../../../../../helpers/adapters/httpRequest-adapter';
import { type ReviewQuestionRouterInterface } from '../../../abstract/routers/reviewQuestion/reviewQuestionRouter-interface';
import { ApiConnection } from '../../../connection/apiConnection';
import { ReviewQuestionRouter } from '../../../routers/reviewQuestion/reviewQuestion-router';

export function makeReviewQuestionRouterFactory(): ReviewQuestionRouterInterface {
	const httpRequestAdapter = new HttpRequestAdapter();
	const apiConnection = new ApiConnection();

	return new ReviewQuestionRouter(httpRequestAdapter, apiConnection);
}
