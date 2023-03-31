import { HttpRequestAdapter } from '../../../../../helpers/adapters/httpRequest-adapter';
import { RestaurantIdHandler } from '../../../../../helpers/handlers/restaurantId/restaurantIdHandler-helper';
import { TokenHandler } from '../../../../../helpers/handlers/token/tokenHandler-helper';
import { type ReviewQuestionAdminRouterInterface } from '../../../abstract/routers/reviewQuestion/reviewQuestionAdminRouter-interface';
import { ApiConnection } from '../../../connection/apiConnection';
import { ReviewQuestionAdminRouter } from '../../../routers/reviewQuestion/reviewQuestionAdmin-router';

export function makeReviewQuestionAdminRouterFactory(): ReviewQuestionAdminRouterInterface {
	const httpRequestAdapter = new HttpRequestAdapter();
	const apiConnection = new ApiConnection();
	const tokenHandler = new TokenHandler();
	const restaurantIdHandler = new RestaurantIdHandler();

	return new ReviewQuestionAdminRouter(
		httpRequestAdapter,
		apiConnection,
		tokenHandler,
	);
}
