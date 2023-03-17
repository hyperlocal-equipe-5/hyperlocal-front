import { HttpRequestAdapter } from '../../../../../helpers/adapters/httpRequest-adapter';
import { TokenHandler } from '../../../../../helpers/token/tokenHandler-helper';
import { type OrderAdminRouterInterface } from '../../../abstract/routers/order/orderRouterAdmin-interface';
import { ApiConnection } from '../../../connection/apiConnection';
import { OrderAdminRouter } from '../../../routers/order/orderAdmin-router';

export function makeOrderAdminRouterFactory(): OrderAdminRouterInterface {
	const httpRequestAdapter = new HttpRequestAdapter();
	const apiConnection = new ApiConnection();
	const tokenHandler = new TokenHandler();

	return new OrderAdminRouter(httpRequestAdapter, apiConnection, tokenHandler);
}
