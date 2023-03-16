import { HttpRequestAdapter } from '../../../../../helpers/adapters/httpRequest-adapter';
import { type RestaurantRouterInterface } from '../../../abstract/routers/restaurant/restaurantRouter-interface';
import { ApiConnection } from '../../../connection/apiConnection';
import { RestaurantRouter } from '../../../routers/restaurant/restaurant-router';

export function makeRestaurantRouterFactory(): RestaurantRouterInterface {
	const httpRequestAdapter = new HttpRequestAdapter();
	const apiConnection = new ApiConnection();

	return new RestaurantRouter(httpRequestAdapter, apiConnection);
}
