import { HttpRequestAdapter } from '../../../../../helpers/adapters/httpRequest-adapter';
import { type ReviewRouterInterface } from '../../../abstract/routers/review/reviewRouter-interface';
import { ApiConnection } from '../../../connection/apiConnection';
import { ReviewRouter } from '../../../routers/review/review-router';

export function makeReviewRouterFactory(): ReviewRouterInterface {
	const httpRequestAdapter = new HttpRequestAdapter();
	const apiConnection = new ApiConnection();

	return new ReviewRouter(httpRequestAdapter, apiConnection);
}
