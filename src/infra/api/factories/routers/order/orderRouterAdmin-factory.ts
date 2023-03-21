import { HttpRequestAdapter } from '../../../../../helpers/adapters/httpRequest-adapter';
import { RestaurantIdHandler } from '../../../../../helpers/handlers/restaurantId/restaurantIdHandler-helper';
import { TokenHandler } from '../../../../../helpers/handlers/token/tokenHandler-helper';
import { type OrderAdminRouterInterface } from '../../../abstract/routers/order/orderRouterAdmin-interface';
import { ApiConnection } from '../../../connection/apiConnection';
import { OrderAdminRouter } from '../../../routers/order/orderAdmin-router';

export function makeOrderAdminRouterFactory(): OrderAdminRouterInterface {
	const httpRequestAdapter = new HttpRequestAdapter();
	const apiConnection = new ApiConnection();
	const tokenHandler = new TokenHandler();
	const restaurantIdHandler = new RestaurantIdHandler();

	return new OrderAdminRouter(
		httpRequestAdapter,
		apiConnection,
		tokenHandler,
		restaurantIdHandler,
	);
}
