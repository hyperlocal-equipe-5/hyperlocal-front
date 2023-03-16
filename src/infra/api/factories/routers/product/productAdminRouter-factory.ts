import { HttpRequestAdapter } from '../../../../../helpers/adapters/httpRequest-adapter';
import { TokenHandler } from '../../../../../helpers/token/tokenHandler-helper';
import { type ProductAdminRouterInterface } from '../../../abstract/routers/product/productRouterAdmin-interface';
import { ApiConnection } from '../../../connection/apiConnection';
import { ProductAdminRouter } from '../../../routers/product/productAdmin-router';

export function makeProductAdminRouterFactory(): ProductAdminRouterInterface {
	const httpRequestAdapter = new HttpRequestAdapter();
	const apiConnection = new ApiConnection();
	const tokenHandler = new TokenHandler();

	return new ProductAdminRouter(
		httpRequestAdapter,
		apiConnection,
		tokenHandler,
	);
}
