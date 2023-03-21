import { HttpRequestAdapter } from '../../../../../helpers/adapters/httpRequest-adapter';
import { TokenHandler } from '../../../../../helpers/handlers/token/tokenHandler-helper';
import { type RestaurantRouterAdminInterface } from '../../../abstract/routers/restaurant/restaurantRouterAdmin-interface';
import { ApiConnection } from '../../../connection/apiConnection';
import { RestaurantAdminRouter } from '../../../routers/restaurant/restaurantAdmin-router';

export function makeRestaurantAdminRouterFactory(): RestaurantRouterAdminInterface {
	const httpRequestAdapter = new HttpRequestAdapter();
	const apiConnection = new ApiConnection();
	const tokenHandler = new TokenHandler();

	return new RestaurantAdminRouter(
		httpRequestAdapter,
		apiConnection,
		tokenHandler,
	);
}
