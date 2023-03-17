import { HttpRequestAdapter } from '../../../../../helpers/adapters/httpRequest-adapter';
import { type CategoryRouterInterface } from '../../../abstract/routers/category/categoryRouter-interface';
import { ApiConnection } from '../../../connection/apiConnection';
import { CategoryRouter } from '../../../routers/category/category-router';

export function makeCategoryRouterFactory(): CategoryRouterInterface {
	const httpRequestAdapter = new HttpRequestAdapter();
	const apiConnection = new ApiConnection();

	return new CategoryRouter(httpRequestAdapter, apiConnection);
}
