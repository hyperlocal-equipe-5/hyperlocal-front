import { HttpRequestAdapter } from '../../../../../helpers/adapters/httpRequest-adapter';
import { type OrderRouterInterface } from '../../../abstract/routers/order/orderRouter-interface';
import { ApiConnection } from '../../../connection/apiConnection';
import { OrderRouter } from '../../../routers/order/order-router';

export function makeOrderRouterFactory(): OrderRouterInterface {
	const httpRequestAdapter = new HttpRequestAdapter();
	const apiConnection = new ApiConnection();

	return new OrderRouter(httpRequestAdapter, apiConnection);
}
