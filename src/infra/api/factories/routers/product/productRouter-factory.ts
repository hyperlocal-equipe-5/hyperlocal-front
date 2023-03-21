import { HttpRequestAdapter } from '../../../../../helpers/adapters/httpRequest-adapter';
import { RestaurantIdHandler } from '../../../../../helpers/handlers/restaurantId/restaurantIdHandler-helper';
import { type ProductRouterInterface } from '../../../abstract/routers/product/productRouter-interface';
import { ApiConnection } from '../../../connection/apiConnection';
import { ProductRouter } from '../../../routers/product/product-router';

export function makeProductRouterFactory(): ProductRouterInterface {
	const httpRequestAdapter = new HttpRequestAdapter();
	const apiConnection = new ApiConnection();
	const restaurantIdHandler = new RestaurantIdHandler();

	return new ProductRouter(
		httpRequestAdapter,
		apiConnection,
		restaurantIdHandler,
	);
}
