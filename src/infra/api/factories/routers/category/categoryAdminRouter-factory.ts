import { HttpRequestAdapter } from '../../../../../helpers/adapters/httpRequest-adapter';
import { TokenHandler } from '../../../../../helpers/token/tokenHandler-helper';
import { type CategoryAdminRouterInterface } from '../../../abstract/routers/category/categoryAdminRouter-interface';
import { ApiConnection } from '../../../connection/apiConnection';
import { CategoryAdminRouter } from '../../../routers/category/categoryAdmin-router';

export function makeCategoryAdminRouterFactory(): CategoryAdminRouterInterface {
	const httpRequestAdapter = new HttpRequestAdapter();
	const apiConnection = new ApiConnection();
	const tokenHandler = new TokenHandler();

	return new CategoryAdminRouter(
		httpRequestAdapter,
		apiConnection,
		tokenHandler,
	);
}
