import { HttpRequestAdapter } from '../../../../../helpers/adapters/httpRequest-adapter';
import { TokenHandler } from '../../../../../helpers/token/tokenHandler-helper';
import { type TableAdminRouterInterface } from '../../../abstract/routers/table/tableRouterAdmin-interface';
import { ApiConnection } from '../../../connection/apiConnection';
import { TableAdminRouter } from '../../../routers/table/tableAdmin-router';

export function makeTableAdminRouterFactory(): TableAdminRouterInterface {
	const httpRequestAdapter = new HttpRequestAdapter();
	const apiConnection = new ApiConnection();
	const tokenHandler = new TokenHandler();

	return new TableAdminRouter(httpRequestAdapter, apiConnection, tokenHandler);
}
