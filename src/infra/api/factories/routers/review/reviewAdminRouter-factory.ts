import { HttpRequestAdapter } from '../../../../../helpers/adapters/httpRequest-adapter';
import { TokenHandler } from '../../../../../helpers/token/tokenHandler-helper';
import { type ReviewAdminRouterInterface } from '../../../abstract/routers/review/reviewRouterAdmin-interface';
import { ApiConnection } from '../../../connection/apiConnection';
import { ReviewAdminRouter } from '../../../routers/review/reviewAdmin-router';

export function makeReviewAdminRouterFactory(): ReviewAdminRouterInterface {
	const httpRequestAdapter = new HttpRequestAdapter();
	const apiConnection = new ApiConnection();
	const tokenHandler = new TokenHandler();

	return new ReviewAdminRouter(httpRequestAdapter, apiConnection, tokenHandler);
}
