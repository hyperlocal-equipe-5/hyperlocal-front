import { HttpRequestAdapter } from '../../../../../helpers/adapters/httpRequest-adapter';
import { RestaurantIdHandler } from '../../../../../helpers/handlers/restaurantId/restaurantIdHandler-helper';
import { TokenHandler } from '../../../../../helpers/handlers/token/tokenHandler-helper';
import { type CategoryAdminRouterInterface } from '../../../abstract/routers/category/categoryAdminRouter-interface';
import { ApiConnection } from '../../../connection/apiConnection';
import { CategoryAdminRouter } from '../../../routers/category/categoryAdmin-router';

export function makeCategoryAdminRouterFactory(): CategoryAdminRouterInterface {
	const httpRequestAdapter = new HttpRequestAdapter();
	const apiConnection = new ApiConnection();
	const tokenHandler = new TokenHandler();
	const restaurantIdHandler = new RestaurantIdHandler();

	return new CategoryAdminRouter(
		httpRequestAdapter,
		apiConnection,
		tokenHandler,
		restaurantIdHandler,
	);
}
