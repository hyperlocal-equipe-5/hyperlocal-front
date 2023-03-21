import { HttpRequestAdapter } from '../../../../../helpers/adapters/httpRequest-adapter';
import { RestaurantIdHandler } from '../../../../../helpers/handlers/restaurantId/restaurantIdHandler-helper';
import { TokenHandler } from '../../../../../helpers/handlers/token/tokenHandler-helper';
import { type ProductAdminRouterInterface } from '../../../abstract/routers/product/productRouterAdmin-interface';
import { ApiConnection } from '../../../connection/apiConnection';
import { ProductAdminRouter } from '../../../routers/product/productAdmin-router';

export function makeProductAdminRouterFactory(): ProductAdminRouterInterface {
	const httpRequestAdapter = new HttpRequestAdapter();
	const apiConnection = new ApiConnection();
	const tokenHandler = new TokenHandler();
	const restaurantIdHandler = new RestaurantIdHandler();

	return new ProductAdminRouter(
		httpRequestAdapter,
		apiConnection,
		tokenHandler,
		restaurantIdHandler,
	);
}
